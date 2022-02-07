import { Field, InputType } from "type-graphql";

@InputType()
export class RegisterInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}
