import { User } from "../../../entities/User";
import { Field, ObjectType } from "type-graphql";
import { AuthError } from "./AuthError";

@ObjectType()
export class RegisterObjectType {
  @Field(() => User, { nullable: true })
  user?: User;
  @Field(() => AuthError, { nullable: true })
  error?: AuthError;
}
