import { Injectable } from '@nestjs/common';
import { Order } from '../../domain/models/order.model';
import { OrderRepository } from 'src/infrastructure/database/repositories/order.repository';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async getOrderByID(orderID: string): Promise<Order | null> {
    return this.orderRepository.getOrderByID(orderID);
  }

  async getOrdersByRestaurantID(restaurantID: string): Promise<Order[]> {
    return this.orderRepository.getOrdersByRestaurantID(restaurantID);
  }

  async createOrder(restaurantId: string, orderItems: any): Promise<Order> {
    return this.orderRepository.createOrder(restaurantId, orderItems);
  }
}
