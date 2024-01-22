import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { MenuItemService } from "../services/menu-item.service";
import { MenuItem } from "src/domain/models/menu-item.model";


@Controller('menu-item')
export class MenuItemController {
  constructor(private readonly menuItemService: MenuItemService) {}

  @Get(`/:restaurantId`)
  getMenuItemByRstaurantID(@Param('restaurantId') restaurantId: string): Promise<MenuItem[]> {
    return this.menuItemService.getMenuItemsByRestaurantID(restaurantId);
  }

  @Get()
  getMenuItemByID(@Param('id') id: string): Promise<MenuItem | null> {
    return this.menuItemService.getMenuItemByID(id);
  }

  @Post()
  createMenuItem(@Body() menuItem: MenuItem): Promise<MenuItem> {
    return this.menuItemService.createMenuItem(menuItem);
  }
}