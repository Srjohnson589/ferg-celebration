import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../users/users.model'; // Import the User model

@ObjectType()
export class Shoutout {
  @Field(() => Int)
  id: number;

  @Field()
  message: string;

  @Field()
  createdAt: Date;

  @Field(() => Int)
  userId: number;

  @Field(() => User)
  user: User;
}
