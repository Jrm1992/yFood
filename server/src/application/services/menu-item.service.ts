import { Injectable } from '@nestjs/common';
import { MenuItemRepository } from '../../domain/repositories/menu-item.repository';
import { MenuItem } from '../../domain/models/menu-item.model';

@Injectable()
export class MenuItemService {
  constructor(private readonly menuItemRepository: MenuItemRepository) {}

  async getMenuItemByID(menuItemID: string): Promise<MenuItem | null> {
    return this.menuItemRepository.getMenuItemByID(menuItemID);
  }

  async getMenuItemsByRestaurantID(restaurantID: string): Promise<MenuItem[]> {
    return this.menuItemRepository.getMenuItemsByRestaurantID(restaurantID);
  }

  async createMenuItem(menuItem: MenuItem): Promise<MenuItem> {
    return this.menuItemRepository.createMenuItem(menuItem);
  }
}