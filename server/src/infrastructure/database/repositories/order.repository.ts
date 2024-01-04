import { Order } from "src/domain/models/order.model";
import { OrderRepository as IOrderRepository } from "src/domain/repositories/order.repository";
import { PrismaService } from "../prisma/prisma.service";

export class OrderRepository implements IOrderRepository {
  constructor(private readonly prismaService: PrismaService) {}
  getOrderByID(orderID: string): Promise<Order> {
    return this.prismaService.order.findUnique({
      where: {
        id: orderID
      }
    })
  }
  createOrder(order: Order): Promise<Order> {
    return this.prismaService.order.create({ data: order })
  }
  updateOrder(order: Order): Promise<Order> {
    return this.prismaService.order.update({ data: order, where: { id: order.id } })
  }
  deleteOrder(orderID: string): Promise<void> {
    this.prismaService.order.delete({ where: { id: orderID } })
    return Promise.resolve()
  }
}