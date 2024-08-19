import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async createUser(email: string, password: string): Promise<any> {
    return this.prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });
  }

  async getUserById(userId: string): Promise<any> {
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  }

  async getAllUsers(): Promise<any> {
    return this.prisma.user.findMany();
  }
}
