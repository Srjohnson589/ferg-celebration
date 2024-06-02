import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Shoutout } from './shoutout.model';
import { User } from '../users/users.model'
import { Prisma, Shoutout as PrismaShoutout } from '@prisma/client';

@Injectable()
export class ShoutoutsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<PrismaShoutout[]> {
    const shoutouts = await this.prisma.shoutout.findMany({
      include: {
        shoutoutuser: true,
        fromuser: true,
      },
    });

    return shoutouts.map((shoutout: PrismaShoutout & { shoutoutuser: User; fromuser: User }) => ({
      id: shoutout.id,
      createdAt: shoutout.createdAt,
      message: shoutout.message,
      pictureurl: shoutout.pictureurl,
      shoutoutuserId: shoutout.shoutoutuserId,
      shoutoutuser: shoutout.shoutoutuser,
      fromuserId: shoutout.fromuserId,
      fromuser: shoutout.fromuser,
    }));
  }

  async createShoutout(
    message: string,
    pictureurl: string,
    shoutoutuserId: number,
    fromuserId: number
  ): Promise<Shoutout> {
    const newShoutout = await this.prisma.shoutout.create({
      data: {
        message,
        pictureurl,
        shoutoutuser: {
          connect: { id: shoutoutuserId },
        },
        fromuser: {
          connect: { id: fromuserId },
        },
      },
      include: {
        shoutoutuser: true,
        fromuser: true,
      },
    });

    return {
      id: newShoutout.id,
      createdAt: newShoutout.createdAt,
      message: newShoutout.message,
      pictureurl: newShoutout.pictureurl,
      shoutoutuserId: newShoutout.shoutoutuserId,
      shoutoutuser: newShoutout.shoutoutuser,
      fromuserId: newShoutout.fromuserId,
      fromuser: newShoutout.fromuser,
    } as Shoutout;
  }
}
