import { randomUUID } from 'crypto';
import { Order } from 'src/domain/models/order.model';
import { OrderRepository as IOrderRepository } from 'src/domain/repositories/order.repository';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderRepository implements IOrderRepository {
  constructor(private readonly prismaService: PrismaService) {}
  getOrderByID(orderID: string): Promise<Order> {
    return this.prismaService.order.findUnique({
      where: {
        id: orderID,
      },
    });
  }

  getOrdersByRestaurantID(restaurantID: string): Promise<Order[]> {
    return this.prismaService.order.findMany({
      where: {
        restaurantId: restaurantID,
      },
    });
  }
  
  createOrder(restaurantId: string, orderItems: any): Promise<Order> {
    return this.prismaService.order.create({
      data: {
        id: randomUUID(),
        restaurantId,
        orderItems,
        orderDate: new Date(),
        status: 'PENDING',
        total: 0,
      },
    });
  }
  updateOrder(order: Order): Promise<Order> {
    return this.prismaService.order.update({
      data: order,
      where: { id: order.id },
    });
  }
  deleteOrder(orderID: string): Promise<void> {
    this.prismaService.order.delete({ where: { id: orderID } });
    return Promise.resolve();
  }
}
