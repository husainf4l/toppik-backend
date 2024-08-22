import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaService } from './prisma/prisma.service';
import { OrderModule } from './order/order.module';
import { CartModule } from './cart/cart.module';
import { UserModule } from './user/user.module';
import { AuthorizedPosModule } from './authorized-pos/authorized-pos.module';
import { UploadModule } from './upload/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [
    ProductModule,
    OrderModule,
    CartModule,
    UserModule,
    AuthorizedPosModule,
    UploadModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),

  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
