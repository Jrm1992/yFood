import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Order } from 'src/domain/models/order.model';
import { CreateOrderDto } from '../dto/order.dto';
import { OrderService } from '../services/order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get(':id')
  async getOrder(@Param('id') id: string): Promise<Order | null> {
    return this.orderService.getOrderByID(id);
  }

  @Post()
  async createOrder(
    @Body() createOrderDtoSchema: CreateOrderDto,
  ): Promise<Order> {
    const { restaurantId, orderItems } = createOrderDtoSchema;
    return this.orderService.createOrder(restaurantId, orderItems);
  }
}
