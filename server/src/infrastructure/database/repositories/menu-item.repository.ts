import { MenuItemRepository as IMenuItemRepository } from 'src/domain/repositories/menu-item.repository';
import { PrismaService } from '../prisma/prisma.service';
import { MenuItem } from 'src/domain/models/menu-item.model';

export class MenuItemRepository implements IMenuItemRepository {
  constructor(private readonly prismaService: PrismaService) {}
  getMenuItemByID(menuItemID: string): Promise<MenuItem> {
    return this.prismaService.menuItem.findUnique({
      where: { id: menuItemID },
    });
  }
  getMenuItemsByRestaurantID(restaurantID: string): Promise<MenuItem[]> {
    return this.prismaService.menuItem.findMany({
      where: { restaurantId: restaurantID },
    });
  }
  createMenuItem(menuItem: MenuItem): Promise<MenuItem> {
    return this.prismaService.menuItem.create({ data: menuItem });
  }
  updateMenuItem(menuItem: MenuItem): Promise<MenuItem> {
    return this.prismaService.menuItem.update({
      where: { id: menuItem.id },
      data: menuItem,
    });
  }
  deleteMenuItem(menuItemID: string): Promise<void> {
    this.prismaService.menuItem.delete({ where: { id: menuItemID } });
    return Promise.resolve();
  }
}
