import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class AuthError {
  @Field(() => String)
  field: string;

  @Field(() => String)
  message: string;
}
