import { NonEmptyArray } from "type-graphql";
import { CookieResolver } from "./auth/CookieResolver";
import { HelloWorldResolver } from "./hello/HelloWorldResolver";
import { LoginResolver } from "./user/Login";
import { LogoutResolver } from "./user/Logout";
import { RegisterResolver } from "./user/Register";
import { UserResolver } from "./user/UserResolver";

export const Resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
  HelloWorldResolver,
  RegisterResolver,
  UserResolver,
  LoginResolver,
  LogoutResolver,
  CookieResolver,
];
