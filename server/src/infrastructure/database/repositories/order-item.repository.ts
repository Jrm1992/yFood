import { Injectable } from "@nestjs/common";
import { OrderItemRepository as IOrderItemRepository } from "src/domain/repositories/order-item.repository";
import { PrismaService } from "../prisma/prisma.service";
import { OrderItem } from "@prisma/client";

@Injectable()
export class OrderItemRepository implements IOrderItemRepository {
  constructor(private readonly prismaService: PrismaService) {}
  
  getOrderItemByID(orderItemID: string): Promise<OrderItem | null> {
    throw new Error("Method not implemented.");
  }
  createOrderItem(orderItem: OrderItem): Promise<OrderItem> {
    throw new Error("Method not implemented.");
  }
  updateOrderItem(orderItem: OrderItem): Promise<OrderItem> {
    throw new Error("Method not implemented.");
  }
  deleteOrderItem(orderItemID: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}