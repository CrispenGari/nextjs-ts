import { InputType, Field } from "type-graphql";

@InputType()
export class LoginInput {
  @Field(() => String, { nullable: false })
  usernameOrEmail: string;

  @Field(() => String, { nullable: false })
  password: string;
}
