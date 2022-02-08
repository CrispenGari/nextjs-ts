import { Arg, Query, Resolver } from "type-graphql";

@Resolver()
export class CookieResolver {
  // Getting the user by session id
  @Query(() => Boolean, { nullable: false })
  async cookie(
    @Arg("cookie", () => String) cookieName: string
  ): Promise<boolean> {
    if (!cookieName) return false;
    return true;
  }
}
