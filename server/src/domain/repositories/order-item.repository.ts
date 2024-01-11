import { OrderItem } from '../models/order-item.model';

export interface OrderItemRepository {
  getOrderItemByID(orderItemID: string): Promise<OrderItem | null>;
  createOrderItem(orderItem: OrderItem): Promise<OrderItem>;
  updateOrderItem(orderItem: OrderItem): Promise<OrderItem>;
  deleteOrderItem(orderItemID: string): Promise<void>;
}
