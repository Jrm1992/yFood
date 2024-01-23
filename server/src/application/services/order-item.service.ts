import { Injectable } from '@nestjs/common';
import { MenuItem } from 'src/domain/models/menu-item.model';
import { OrderItem } from 'src/domain/models/order-item.model';
import { OrderItemRepository } from 'src/infrastructure/database/repositories/order-item.repository';

@Injectable()
export class OrderItemService {
  constructor(private readonly orderItemRepository: OrderItemRepository) {}

  async getOrderItemByID(orderItemID: string): Promise<OrderItem | null> {
    try {
      return this.orderItemRepository.getOrderItemByID(orderItemID);
    } catch (error) {
      throw new Error('Error getting order item: ' + error);
    }
  }

  async createOrderItem(
    menuItemId: string,
    quantity: number,
    orderID: string,
    total: number,
  ): Promise<OrderItem> {
    try {
      return await this.orderItemRepository.createOrderItem(
        menuItemId,
        quantity,
        orderID,
        total,
      );
    } catch (error) {
      throw new Error('Error creating order item: ' + error);
    }
  }

  async updateOrderItem(orderItem: OrderItem): Promise<OrderItem> {
    try {
      return await this.orderItemRepository.updateOrderItem(orderItem);
    } catch (error) {
      throw new Error('Error updating order item: ' + error);
    }
  }

  async deleteOrderItem(orderItemID: string): Promise<void> {
    try {
      await this.orderItemRepository.deleteOrderItem(orderItemID);
    } catch (error) {
      throw new Error('Error deleting order item: ' + error);
    }
  }
}
