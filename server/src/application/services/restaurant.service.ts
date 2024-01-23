import { Injectable } from '@nestjs/common';
import { Restaurant } from '../../domain/models/restaurant.model';
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';

@Injectable()
export class RestaurantService {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  async getRestaurants(): Promise<Restaurant[]> {
    try {
      return this.restaurantRepository.getRestaurants();
    } catch (error) {
      throw new Error('Error getting restaurants: ' + error);
    }
  }

  async getRestaurantByID(restaurantID: string): Promise<Restaurant | null> {
    try {
      return this.restaurantRepository.getRestaurantByID(restaurantID);
    } catch (error) {
      throw new Error('Error getting restaurant: ' + error);
    }
  }

  async createRestaurant(restaurant: Restaurant): Promise<Restaurant> {
    try {
      return this.restaurantRepository.createRestaurant(restaurant);
    } catch (error) {
      throw new Error('Error creating restaurant: ' + error);
    }
  }

  async updateRestaurant(restaurant: Restaurant): Promise<Restaurant> {
    if (!restaurant.id) {
      throw new Error('Cannot update restaurant without an ID.');
    }

    try {
      return this.restaurantRepository.updateRestaurant({
        where: { id: restaurant.id },
        data: restaurant,
      });
    } catch (error) {
      throw new Error('Error updating restaurant: ' + error);
    }


  }
}
