import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ShoutoutsService } from './shoutouts.service';
import { Shoutout } from './shoutout.model';

@Resolver(() => Shoutout)
export class ShoutoutsResolver {
  constructor(private readonly shoutoutsService: ShoutoutsService) {}

  @Query(() => [Shoutout])
  async shoutouts() {
    return this.shoutoutsService.findAll();
  }

  @Mutation(() => Shoutout)
  async createShoutout(@Args('message') message: string, @Args('userId') userId: number) {
    return this.shoutoutsService.createShoutout(message, userId);
  }
}
