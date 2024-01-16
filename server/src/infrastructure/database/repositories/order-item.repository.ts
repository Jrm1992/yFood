import { Injectable } from "@nestjs/common";
import { OrderItemRepository as IOrderItemRepository } from "src/domain/repositories/order-item.repository";
import { PrismaService } from "../prisma/prisma.service";
import { OrderItem } from "@prisma/client";
import { MenuItem } from "src/domain/models/menu-item.model";

@Injectable()
export class OrderItemRepository implements IOrderItemRepository {
  constructor(private readonly prismaService: PrismaService) {}
  
  getOrderItemByID(orderItemID: string): Promise<OrderItem | null> {
    throw new Error("Method not implemented.");
  }
  createOrderItem(menuItemId: string, quantity: number, orderID: string): Promise<OrderItem> {
    return this.prismaService.orderItem.create({
      data: {
        menuItemId,
        orderId: orderID,
        quantity
      }
    })
    }

  updateOrderItem(orderItem: OrderItem): Promise<OrderItem> {
    throw new Error("Method not implemented.");
  }
  deleteOrderItem(orderItemID: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}