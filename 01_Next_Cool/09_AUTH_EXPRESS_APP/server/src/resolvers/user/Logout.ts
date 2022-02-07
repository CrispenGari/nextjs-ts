import { CtxType } from "../../types";
import { Mutation, Ctx, Resolver } from "type-graphql";
import { __cookieName__ } from "../../constants";

@Resolver()
export class LogoutResolver {
  @Mutation(() => Boolean)
  async logout(@Ctx() { req, res }: CtxType): Promise<true | false> {
    return new Promise((resolve, reject) => {
      req.session.destroy((error: any) => {
        res.clearCookie(__cookieName__);
        if (error) {
          return reject(false);
        } else {
          return resolve(true);
        }
      });
    });
  }
}
