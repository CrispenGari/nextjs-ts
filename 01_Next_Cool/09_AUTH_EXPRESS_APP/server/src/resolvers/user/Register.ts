import { CtxType } from "../../types";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { RegisterInput } from "./InputTypes/RegisterInput";
import { RegisterObjectType } from "./ObjectTypes/RegisterObjectType";

import {
  isValidEmail,
  isValidPassword,
  isValidUsername,
} from "@crispengari/regex-validator";
import argorn2 from "argon2";
import { User } from "../../entities/User";

@Resolver()
export class RegisterResolver {
  @Mutation(() => RegisterObjectType)
  async register(
    @Ctx() { req }: CtxType,
    @Arg("input", () => RegisterInput)
    { email, password, username }: RegisterInput
  ): Promise<RegisterObjectType> {
    username = username.trim().toLocaleLowerCase();
    email = email.trim().toLocaleLowerCase();
    if (!isValidUsername(username)) {
      return {
        error: {
          field: "username",
          message: "invalid username.",
        },
      };
    }
    if (!isValidEmail(email)) {
      return {
        error: {
          field: "email",
          message: "invalid email address.",
        },
      };
    }
    if (!isValidPassword(password)) {
      return {
        error: {
          field: "password",
          message:
            "password must be at least 8 characters with at least 1 letter and 1 number.",
        },
      };
    }
    if (await User.findOne({ where: { username } })) {
      return {
        error: {
          message: "username is already taken.",
          field: "username",
        },
      };
    }
    if (await User.findOne({ where: { email } })) {
      return {
        error: {
          message: "email address is already in use.",
          field: "email",
        },
      };
    }
    const hashedPassword = await argorn2.hash(password);

    const user = await User.create({
      password: hashedPassword,
      username,
      email,
    }).save();

    // Create a user don't set the session until they confirmed their email
    req.session.userId = user.id;
    return { user: user };
  }
}
