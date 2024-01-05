import { Injectable } from '@nestjs/common';
import { Restaurant } from '../../domain/models/restaurant.model';
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';

@Injectable()
export class RestaurantService {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  async getRestaurantByID(restaurantID: string): Promise<Restaurant | null> {
    return this.restaurantRepository.getRestaurantByID(restaurantID);
  }

  async createRestaurant(restaurant: Restaurant): Promise<Restaurant> {
    return this.restaurantRepository.createRestaurant(restaurant);
  }

  async updateRestaurant(restaurant: Restaurant): Promise<Restaurant> {
    if (!restaurant.id) {
      throw new Error('Cannot update restaurant without an ID.');
    }

    return this.restaurantRepository.updateRestaurant({ where: { id: restaurant.id }, data: restaurant });
  }

}