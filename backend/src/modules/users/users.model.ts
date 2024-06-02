import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Shoutout } from '../shoutouts/shoutout.model'; // Import Shoutout model if needed


@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field(() => [Shoutout], { nullable: true })
  shoutouts?: Shoutout[];
}
