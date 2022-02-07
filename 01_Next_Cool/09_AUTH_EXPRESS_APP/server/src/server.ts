import "reflect-metadata";
import "dotenv/config";
import express, { Application } from "express";
import cors from "cors";
import {
  __cookieName__,
  __cookieSecret__,
  __maxAge__,
  __port__,
  __secure__,
} from "./constants";
import session from "express-session";
import Redis from "ioredis";
import connectRedis from "connect-redis";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { Resolvers } from "./resolvers";

(async () => {
  // Connecting to the database
  await createConnection();
  //  Vars
  const app: Application = express();
  const RedisStore = connectRedis(session);
  const redis: Redis.Redis = new Redis();
  const schema = await buildSchema({
    resolvers: [...Resolvers],
    validate: false,
  });

  // Middleware
  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
  );
  app.use(
    session({
      store: new RedisStore({
        client: redis,
      }),
      name: __cookieName__,
      secret: __cookieSecret__,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: __secure__,
        maxAge: __maxAge__,
        sameSite: "lax",
      },
    })
  );
  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => ({
      req,
      res,
      redis,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({
    cors: false,
    app,
    path: "/",
  });
  app.listen(__port__);
})()
  .then(() => {
    console.log(`The server is running on port: ${__port__}`);
  })
  .catch((error) => console.log(error));
