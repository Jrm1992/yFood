import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../../domain/repositories/order.repository';
import { Order } from '../../domain/models/order.model';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async getOrderByID(orderID: string): Promise<Order | null> {
    return this.orderRepository.getOrderByID(orderID);
  }


  async createOrder(order: Order): Promise<Order> {
    return this.orderRepository.createOrder(order);
  }
}