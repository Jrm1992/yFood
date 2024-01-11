import { Restaurant } from '../models/restaurant.model';

export interface RestaurantRepository {
  getRestaurants(): Promise<Restaurant[]>;
  getRestaurantByID(restaurantID: string): Promise<Restaurant | null>;
  createRestaurant(restaurant: Restaurant): Promise<Restaurant>;
  updateRestaurant({
    where,
    data,
  }: {
    where: { id: string };
    data: Restaurant;
  }): Promise<Restaurant>;
  deleteRestaurant(restaurantID: string): Promise<void>;
}
