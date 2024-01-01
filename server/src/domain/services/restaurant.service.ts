import { Injectable } from '@nestjs/common';
import { RestaurantRepository } from '../../domain/repositories/restaurant.repository';
import { Restaurant } from '../../domain/models/restaurant.model';

@Injectable()
export class RestaurantService {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  async getRestaurantByID(restaurantID: string): Promise<Restaurant | null> {
    return this.restaurantRepository.getRestaurantByID(restaurantID);
  }

  async createRestaurant(restaurant: Restaurant): Promise<Restaurant> {
    return this.restaurantRepository.createRestaurant(restaurant);
  }

}