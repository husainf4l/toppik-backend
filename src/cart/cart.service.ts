import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) { }

  async createCart(): Promise<any> {
    return this.prisma.cart.create({
      data: {},
    });
  }

  async addItemToCart(cartId: string, productId: string, quantity: number): Promise<any> {
    return this.prisma.cartItem.create({
      data: {
        cartId,
        productId,
        quantity,
      },
    });
  }

  async getCart(cartId: string): Promise<any> {
    return this.prisma.cart.findUnique({
      where: { id: cartId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
  }


  async removeItemFromCart(cartItemId: string): Promise<any> {
    return this.prisma.cartItem.delete({
      where: { id: cartItemId },
    });
  }
}
