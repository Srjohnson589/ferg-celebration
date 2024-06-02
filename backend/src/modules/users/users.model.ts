import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Shoutout } from '../shoutouts/shoutout.model'; // Import Shoutout model

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field(() => [Shoutout], { nullable: true })
  shoutoutsSent?: Shoutout[];

  @Field(() => [Shoutout], { nullable: true })
  shoutoutsReceived?: Shoutout[];
}
