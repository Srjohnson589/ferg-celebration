import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Shoutout } from './shoutout.model'; // GraphQL model
import { Shoutout as PrismaShoutout } from '@prisma/client'; // Prisma model

@Injectable()
export class ShoutoutsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<PrismaShoutout[]> {
    return this.prisma.shoutout.findMany();
  }

  async createShoutout(message: string, userId: number): Promise<PrismaShoutout> {
    return this.prisma.shoutout.create({
      data: { message,
        user: {
          connect: { id: userId }
        }
       },
      });
  }
}
