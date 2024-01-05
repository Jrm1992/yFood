import { Controller, Get, Post, Body, Param, Put, HttpException, HttpStatus } from '@nestjs/common';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant } from '../../domain/models/restaurant.model';
import { RestaurantDto, RestaurantDtoSchema } from '../dto/restaurant.dto';
import { randomUUID } from 'crypto';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get(':id')
  async getRestaurant(@Param('id') id: string): Promise<Restaurant | null> {
    return this.restaurantService.getRestaurantByID(id);
  }

  @Post()
  async createRestaurant(@Body() restaurantDto: RestaurantDto): Promise<Restaurant> {
    try {
      const validatedDto = RestaurantDtoSchema.parse(restaurantDto);

      const restaurant = new Restaurant(
        randomUUID().toString(),
        validatedDto.name,
        validatedDto.address,
        validatedDto.phone,
        validatedDto.description
      );

      return this.restaurantService.createRestaurant(restaurant);
    } catch (error) {
      throw new HttpException({ message: 'Validation failed', errors: error.errors }, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  async updateRestaurant(@Param('id') id: string, @Body() restaurantDto: RestaurantDto): Promise<Restaurant> {
    try {
      const validatedDto = RestaurantDtoSchema.parse(restaurantDto);

      const restaurant = new Restaurant(
        id,
        validatedDto.name,
        validatedDto.address,
        validatedDto.phone,
        validatedDto.description
      );

      return this.restaurantService.updateRestaurant(restaurant);
    } catch (error) {
      throw new HttpException({ message: 'Validation failed', errors: error.errors }, HttpStatus.BAD_REQUEST);
    }
  }
}
