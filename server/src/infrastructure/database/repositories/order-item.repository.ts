import { Injectable } from '@nestjs/common';
import { OrderItem } from '@prisma/client';
import { OrderItemRepository as IOrderItemRepository } from 'src/domain/repositories/order-item.repository';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrderItemRepository implements IOrderItemRepository {
  constructor(private readonly prismaService: PrismaService) {}

  getOrderItemByID(orderItemID: string): Promise<OrderItem | null> {
    throw new Error('Method not implemented.');
  }
  createOrderItem(
    menuItemId: string,
    quantity: number,
    orderID: string,
    total: number,
  ): Promise<OrderItem> {
    return this.prismaService.orderItem.create({
      data: {
        menuItemId,
        orderId: orderID,
        quantity,
        total,
      },
    });
  }

  updateOrderItem(orderItem: OrderItem): Promise<OrderItem> {
    throw new Error('Method not implemented.');
  }
  deleteOrderItem(orderItemID: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
