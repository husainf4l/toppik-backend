import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) { }

  async createCart(): Promise<any> {
    return this.prisma.cart.create({
      data: {},
    });
  }

  async addItemToCart(cartId: string, productId: string, quantity: number, color: string): Promise<any> {
    // Verify if the cart exists
    const cart = await this.prisma.cart.findUnique({
      where: { id: cartId },
    });

    if (!cart) {
      throw new NotFoundException(`Cart with ID ${cartId} does not exist.`);
    }

    // Optionally, you might want to validate the product existence as well
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${productId} does not exist.`);
    }

    return this.prisma.cartItem.create({
      data: {
        cartId,
        productId,
        quantity,
        color,
      },
    });
  }

  async getCart(cartId: string): Promise<any> {
    const cart = await this.prisma.cart.findUnique({
      where: { id: cartId },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!cart) {
      throw new NotFoundException(`Cart with ID ${cartId} does not exist.`);
    }

    return cart;
  }

  async removeItemFromCart(cartItemId: string): Promise<any> {
    const cartItem = await this.prisma.cartItem.findUnique({
      where: { id: cartItemId },
    });

    if (!cartItem) {
      throw new NotFoundException(`CartItem with ID ${cartItemId} does not exist.`);
    }

    return this.prisma.cartItem.delete({
      where: { id: cartItemId },
    });
  }

  async deleteCart(cartId: string): Promise<any> {
    // First, ensure the cart exists
    const cart = await this.prisma.cart.findUnique({
      where: { id: cartId },
    });

    if (!cart) {
      throw new NotFoundException(`Cart with ID ${cartId} does not exist.`);
    }

    // Delete all items associated with the cart
    await this.prisma.cartItem.deleteMany({
      where: { cartId },
    });

    // Then delete the cart itself
    return this.prisma.cart.delete({
      where: { id: cartId },
    });
  }
}
