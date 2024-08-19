import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaService } from './prisma/prisma.service';
import { OrderModule } from './order/order.module';
import { CartModule } from './cart/cart.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    ProductModule,
    OrderModule,
    CartModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
