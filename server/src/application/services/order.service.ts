import { Injectable } from '@nestjs/common';
import { Order } from '../../domain/models/order.model';
import { OrderRepository } from 'src/infrastructure/database/repositories/order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async getOrderByID(orderID: string): Promise<Order | null> {
    try {
      return await this.orderRepository.getOrderByID(orderID);
    } catch (error) {
      throw new Error('Error getting order: ' + error);
    }
  }

  async getOrdersByRestaurantID(restaurantID: string): Promise<Order[]> {
    try {
      return await this.orderRepository.getOrdersByRestaurantID(restaurantID);
    } catch (error) {
      throw new Error('Error getting orders: ' + error);
    }
  }

  async createOrder(restaurantId: string, orderItems: { menuItemId: string; quantity: number, total: number }): Promise<Order> {
    try {
      return await this.orderRepository.createOrder(restaurantId, orderItems);
    } catch (error) {
      throw new Error('Error creating order: ' + error);
    }
  }
}
