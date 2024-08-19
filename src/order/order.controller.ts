import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post(':cartId')
  async createOrder(
    @Param('cartId') cartId: string,
    @Body('address') address: string,
    @Body('mobile') mobile: string,
    @Body('userId') userId?: string,  // Optional userId for authenticated users
  ) {
    return this.orderService.createOrder(cartId, address, mobile, userId);
  }

  @Get(':orderId')
  async getOrder(@Param('orderId') orderId: string) {
    return this.orderService.getOrder(orderId);
  }
}
