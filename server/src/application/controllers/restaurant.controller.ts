import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant } from '../../domain/models/restaurant.model';
import { RestaurantDto } from '../dto/restaurant.dto';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get(':id')
  async getRestaurant(@Param('id') id: string): Promise<Restaurant | null> {
    return this.restaurantService.getRestaurantByID(id);
  }

  @Post()
  async createRestaurant(@Body() restaurant: RestaurantDto): Promise<Restaurant> {
    return this.restaurantService.createRestaurant(restaurant);
  }

  @Put(':id')
  async updateRestaurant(@Param('id') id: string, @Body() restaurant: Restaurant): Promise<Restaurant> {
    return this.restaurantService.updateRestaurant(restaurant);
  }
}
