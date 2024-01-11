import { OrderItem } from '@prisma/client';
import { Order } from '../models/order.model';

export interface OrderRepository {
  getOrderByID(orderID: string): Promise<Order | null>;
  getOrdersByRestaurantID(restaurantID: string): Promise<Order[] | null>;
  createOrder(restaurantId: string, orderItems: OrderItem[]): Promise<Order>;
  updateOrder(order: Order): Promise<Order>;
  deleteOrder(orderID: string): Promise<void>;
}
