import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from './users.model';
import { Prisma, User as PrismaUser } from '@prisma/client';


@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<PrismaUser[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<PrismaUser> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async create(firstname: string, lastname: string): Promise<PrismaUser> {
    return this.prisma.user.create({
      data: {
        firstname,
        lastname
      },
    });
  }
}
