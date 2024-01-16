import { Injectable } from "@nestjs/common";
import { MenuItem } from "src/domain/models/menu-item.model";
import { OrderItem } from "src/domain/models/order-item.model";
import { OrderItemRepository } from "src/infrastructure/database/repositories/order-item.repository";

@Injectable()
export class OrderItemService  {
  constructor(private readonly orderItemRepository: OrderItemRepository) {}

  async getOrderItemByID(orderItemID: string): Promise<OrderItem | null> {
    return this.orderItemRepository.getOrderItemByID(orderItemID);
  }

  async createOrderItem(menuItemId: string, quantity: number, orderID: string): Promise<OrderItem> {
    return this.orderItemRepository.createOrderItem(menuItemId, quantity, orderID);
  }

  async updateOrderItem(orderItem: OrderItem): Promise<OrderItem> {
    return this.orderItemRepository.updateOrderItem(orderItem);
  }

  async deleteOrderItem(orderItemID: string): Promise<void> {
    return this.orderItemRepository.deleteOrderItem(orderItemID);
  }
}