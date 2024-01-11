import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './infrastructure/database/prisma/prisma.module';
import { RestaurantController } from './application/controllers/restaurant.controller';
import { MenuItemService } from './application/services/menu-item.service';
import { OrderService } from './application/services/order.service';
import { RestaurantService } from './application/services/restaurant.service';
import { MenuItemRepository } from './infrastructure/database/repositories/menu-item.repository';
import { OrderRepository } from './infrastructure/database/repositories/order.repository';
import { RestaurantRepository } from './infrastructure/database/repositories/restaurant.repository';

@Module({
  imports: [PrismaModule],
  controllers: [AppController, RestaurantController],
  providers: [
    AppService,
    RestaurantService,
    MenuItemService,
    OrderService,
    RestaurantRepository,
    OrderRepository,
    MenuItemRepository,
  ],
})
export class AppModule {}
