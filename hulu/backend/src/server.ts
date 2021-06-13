import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import bcrypt from "bcryptjs";
import bodyParser from "body-parser";
import passport from "passport";

const app: Application = express();
// midlewares

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser("mysecret"));
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);
app.use(
  session({
    secret: "mysecret",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user: any, callback: any) => {
  callback(null, user);
});

passport.deserializeUser((user: any, callback: any) => {
  callback(null, user);
});

app.get("/", (req, res) => {
  res.status(200).send({
    application: "Hulu",
    cate: "backend",
  });
});

app.get("/user", (req, res, next) => {
  res.status(200).send(req.user);
});

app.get("/logout", (req, res) => {
  req.logOut();
  res.status(200).send("Ok");
});

app.get("/register", (rew, res) => {});
app.get("/login", (req, res) => {});
app.listen(3001, () => {
  console.log("Server started");
});
