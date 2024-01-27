import { Test, TestingModule } from "@nestjs/testing";
import { OrderService } from "../services/order.service";
import { OrderController } from "./order.controller";

jest.mock('../services/order.service');

describe('OrderController', () => {
  let orderController: OrderController;
  let orderService: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [OrderService],
    }).compile();

    orderController = module.get<OrderController>(OrderController);
    orderService = module.get<OrderService>(OrderService);
  })

  describe('getOrder', () => {
    it('should call getOrderByID', async () => {
      const getOrderByIDMock = jest.fn();
      orderService.getOrderByID = getOrderByIDMock;

      await orderController.getOrder('123');

      expect(getOrderByIDMock).toHaveBeenCalled();
    })
  })

  describe('getOrdersByRestaurantID', () => {
    it('should call getOrdersByRestaurantID', async () => {
      const getOrdersByRestaurantIDMock = jest.fn();
      orderService.getOrdersByRestaurantID = getOrdersByRestaurantIDMock;

      await orderController.getOrdersByRestaurantID('123');

      expect(getOrdersByRestaurantIDMock).toHaveBeenCalled();
    })
  })

  describe('createOrder', () => {
    it('should call createOrder', async () => {
      const createOrderMock = jest.fn();
      orderService.createOrder = createOrderMock;

      await orderController.createOrder({
        restaurantId: '123',
        orderItems: [{
          menuItemId: 'idtest',
          quantity: 1,
          total: 1
        }]
      })

      expect(createOrderMock).toHaveBeenCalled();
    })
  })
})