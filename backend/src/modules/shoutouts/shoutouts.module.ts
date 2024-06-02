import { Module } from '@nestjs/common';
import { ShoutoutsResolver } from './shoutouts.resolver';
import { ShoutoutsService } from './shoutouts.service';
import { PrismaService } from '../../prisma/prisma.service';


@Module({
  providers: [ShoutoutsResolver, ShoutoutsService, PrismaService],
})
export class ShoutoutsModule {}
