import { User } from "../../entities/User";
import { Arg, Ctx, Int, Query, Resolver } from "type-graphql";
import { CtxType } from "../../types";

@Resolver()
export class UserResolver {
  // Getting the user by session id
  @Query(() => User, { nullable: true })
  async user(@Ctx() { req }: CtxType): Promise<User | undefined> {
    if (typeof req.session.userId !== "undefined") {
      return await User.findOne(req.session.userId);
    }
    return undefined;
  }
  // getting the user by id
  @Query(() => User, { nullable: true })
  async findUser(@Arg("id", () => Int) id: number): Promise<User | undefined> {
    return await User.findOne(id);
  }
}
