import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './users.model';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  async getUsers() {
    return this.usersService.findAll();
  }

  @Query(() => User, { nullable: true })
  async getUser(@Args('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(@Args('username') firstname: string, @Args('password') lastname: string) {
    return this.usersService.create(firstname, lastname);
  }
}
