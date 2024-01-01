import { Order } from '../models/order.model';

export interface OrderRepository {
  getOrderByID(orderID: string): Promise<Order | null>;
  createOrder(order: Order): Promise<Order>;
  updateOrder(order: Order): Promise<Order>;
  deleteOrder(orderID: string): Promise<void>;
}