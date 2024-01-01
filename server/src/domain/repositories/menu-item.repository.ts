import { MenuItem } from '../models/menu-item.model';

export interface MenuItemRepository {
  getMenuItemByID(menuItemID: string): Promise<MenuItem | null>;
  getMenuItemsByRestaurantID(restaurantID: string): Promise<MenuItem[]>;
  createMenuItem(menuItem: MenuItem): Promise<MenuItem>;
  updateMenuItem(menuItem: MenuItem): Promise<MenuItem>;
  deleteMenuItem(menuItemID: string): Promise<void>;
}