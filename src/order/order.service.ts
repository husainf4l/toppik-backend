import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) { }

  async createOrder(cartId: string, address: string, mobile: string, userId?: string): Promise<any> {
    const shippingInfo = await this.prisma.shippingInfo.create({
      data: {
        address: address,
        mobile: mobile,
      },
    });

    const cart = await this.prisma.cart.findUnique({
      where: { id: cartId },
      include: {
        items: {
          include: {
            product: true,  // Ensure the product relation is included
          },
        },
      },
    });

    const order = await this.prisma.order.create({
      data: {
        userId: userId || null,  // Associate with a user if provided
        total: cart.items.reduce((sum, item) => sum + item.quantity * item.product.price, 0),
        status: 'Pending',
        shippingInfoId: shippingInfo.id,
        items: {
          create: cart.items.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.product.price,
          })),
        },
      },
      include: {
        items: {
          include: {
            product: true,  // Include product details
          },
        },
        shippingInfo: true,  // Include shipping info details
      },
    });

    return order;  // Return the full order with items and shipping info
  }


  async getOrder(orderId: string): Promise<any> {
    return this.prisma.order.findUnique({
      where: { id: orderId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
        user: true,
        shippingInfo: true,
      },
    });
  }
}
