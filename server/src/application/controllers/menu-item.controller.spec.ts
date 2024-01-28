import { TestingModule, Test } from "@nestjs/testing";
import { MenuItemService } from "../services/menu-item.service";
import { MenuItemController } from "./menu-item.controller";

jest.mock('../services/menu-item.service');

describe('MenuItemController', () => {
  let menuItemController: MenuItemController;
  let menuItemService: MenuItemService;

  beforeEach(async () => {
	const module: TestingModule = await Test.createTestingModule({
    controllers: [MenuItemController],
    providers: [MenuItemService],
	}).compile();

  menuItemController = module.get<MenuItemController>(MenuItemController);
  menuItemService = module.get<MenuItemService>(MenuItemService);
  })

  describe('getMenuItemByRstaurantID', () => {
    it('should call getMenuItemsByRestaurantID', async () => {
      const getMenuItemsByRestaurantIDMock = jest.fn();
      menuItemService.getMenuItemsByRestaurantID = getMenuItemsByRestaurantIDMock;

      await menuItemController.getMenuItemByRstaurantID('123');

      expect(getMenuItemsByRestaurantIDMock).toHaveBeenCalled();
    })
  })

  describe('getMenuItemByID', () => {
    it('should call getMenuItemByID', async () => {
      const getMenuItemByIDMock = jest.fn();
      menuItemService.getMenuItemByID = getMenuItemByIDMock;

      await menuItemController.getMenuItemByID('123');

      expect(getMenuItemByIDMock).toHaveBeenCalled();
    })
  })

  describe('createMenuItem', () => {
    it('should call createMenuItem', async () => {
      const createMenuItemMock = jest.fn();
      menuItemService.createMenuItem = createMenuItemMock;

      await menuItemController.createMenuItem({
        id: '123',
        name: 'test',
        description: 'test',
        price: 1,
        restaurantId: '123'
      })

      expect(createMenuItemMock).toHaveBeenCalled();
    })
  })
})