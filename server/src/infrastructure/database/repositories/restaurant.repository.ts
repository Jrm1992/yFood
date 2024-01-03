import { RestaurantRepository as IRestaurantRepository } from './../../../domain/repositories/restaurant.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Restaurant } from 'src/domain/models/restaurant.model';

@Injectable()
export class RestaurantRepository implements IRestaurantRepository {
  constructor(private readonly prismaService: PrismaService) {}
  
  getRestaurantByID(restaurantID: string): Promise<Restaurant> {
    return this.prismaService.restaurant.findUnique({
      where: {
        id: restaurantID
      }
    })
  }
  createRestaurant(restaurant: Restaurant): Promise<Restaurant> {
    return this.prismaService.restaurant.create({ data: restaurant })
  }
  updateRestaurant(restaurant: Restaurant): Promise<Restaurant> {
    return this.prismaService.restaurant.update({ data: restaurant, where: { id: restaurant.id } })
  }
  deleteRestaurant(restaurantID: string): Promise<void> {
    this.prismaService.restaurant.delete({ where: { id: restaurantID } })
    return Promise.resolve()
  }

}