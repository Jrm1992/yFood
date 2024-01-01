import { Restaurant } from '../models/restaurant.model';

export interface RestaurantRepository {
  getRestaurantByID(restaurantID: string): Promise<Restaurant | null>;
  createRestaurant(restaurant: Restaurant): Promise<Restaurant>;
  updateRestaurant(restaurant: Restaurant): Promise<Restaurant>;
  deleteRestaurant(restaurantID: string): Promise<void>;
}