import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../users/users.model'; // Import the User model

@ObjectType()
export class Shoutout {
  @Field(() => Int)
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  message: string;

  @Field()
  pictureurl: string;

  @Field(() => Int)
  shoutoutuserId: number;

  @Field(() => User)
  shoutoutuser: User;

  @Field(() => Int)
  fromuserId: number;

  @Field(() => User)
  fromuser: User;
}

