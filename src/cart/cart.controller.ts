import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) { }

  @Post()
  createCart() {
    // Create a new cart without requiring a user ID
    return this.cartService.createCart();
  }

  @Post(':id/items')
  addItemToCart(
    @Param('id') cartId: string,
    @Body('productId') productId: string,
    @Body('quantity') quantity: number,
    @Body('color') color: string,  // Add color parameter
  ) {
    return this.cartService.addItemToCart(cartId, productId, quantity, color);
  }

  @Get(':id')
  getCart(@Param('id') cartId: string) {
    return this.cartService.getCart(cartId);
  }

  @Delete('items/:id')
  removeItemFromCart(@Param('id') cartItemId: string) {
    return this.cartService.removeItemFromCart(cartItemId);
  }
  @Delete('delete/:id')
  deleteCart(@Param('id') cartId: string) {
    return this.cartService.deleteCart(cartId);
  }

}
