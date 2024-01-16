import { MenuItem } from '../models/menu-item.model';
import { OrderItem } from '../models/order-item.model';

export interface OrderItemRepository {
  getOrderItemByID(orderItemID: string): Promise<OrderItem | null>;
  createOrderItem(
    menuItemId: string,
    quantity: number,
    orderID: string,
    total: number,
  ): Promise<OrderItem>;
  updateOrderItem(orderItem: OrderItem): Promise<OrderItem>;
  deleteOrderItem(orderItemID: string): Promise<void>;
}
