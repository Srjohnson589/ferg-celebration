import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
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
  async createShoutout(
    @Args('message') message: string,
    @Args('pictureurl') pictureurl: string,
    @Args('shoutoutuserId', { type: () => Int }) shoutoutuserId: number,
    @Args('fromuserId', { type: () => Int }) fromuserId: number,
  ) {
    return this.shoutoutsService.createShoutout(message, pictureurl, shoutoutuserId, fromuserId);
  }
}

