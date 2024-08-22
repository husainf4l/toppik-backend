import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createProductDto: CreateProductDto) {
    try {
      const newProduct = await this.prisma.product.create({
        data: {
          ...createProductDto,
        },
      });
      return newProduct;
    } catch (error) {
      throw new HttpException(
        'Failed to create product',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      return await this.prisma.product.findMany();
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve products',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    const findProduct = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!findProduct) {
      throw new HttpException('No product found!', HttpStatus.NOT_FOUND);
    }

    return findProduct;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const findProduct = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!findProduct) {
      throw new HttpException('No product found!', HttpStatus.NOT_FOUND);
    }

    try {
      const updatedProduct = await this.prisma.product.update({
        where: { id },
        data: {
          ...updateProductDto,
        },
      });
      return updatedProduct;
    } catch (error) {
      throw new HttpException(
        'Failed to update product',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    const findProduct = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!findProduct) {
      throw new HttpException('No product found!', HttpStatus.NOT_FOUND);
    }

    try {
      await this.prisma.product.delete({
        where: { id },
      });
      return 'The product was deleted';
    } catch (error) {
      console.error('Error deleting product:', error);

      throw new HttpException(
        'Failed to delete product',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findFeaturedProducts() {
    const featuredProducts = await this.prisma.product.findMany({
      where: {
        featured: true
      }
    })
    return featuredProducts
  }
}
