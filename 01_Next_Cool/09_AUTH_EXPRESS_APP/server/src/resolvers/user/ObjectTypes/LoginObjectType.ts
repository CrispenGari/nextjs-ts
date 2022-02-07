import { User } from "../../../entities/User";
import { Field, ObjectType } from "type-graphql";
import { AuthError } from "./AuthError";

@ObjectType()
export class LoginObjectType {
  @Field(() => User, { nullable: true })
  user?: User;
  @Field(() => AuthError, { nullable: true })
  error?: AuthError;
}
