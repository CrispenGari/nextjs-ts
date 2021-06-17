import express, { Application } from "express";
import mongoose, { NativeError } from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import bcrypt from "bcryptjs";
import bodyParser from "body-parser";
import passport from "passport";
import url from "./connection";
import localStrategy from "passport-local";
import Users from "./models";
import local from "./strategies";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

// Connecting to the database

mongoose.connect(
  url,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err: NativeError) => {
    if (err) {
      throw err;
    } else {
      console.log("Connected to mongoDB");
    }
  }
);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection open.");
});
// midlewares
app.use(
  session({
    secret: "anything",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);
app.use(express.json());
app.use(cookieParser("anything"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user: any, callback: any) => {
  callback(null, user._id);
});

passport.deserializeUser((id: string, callback: any) => {
  Users.findById(id, (error: Error, user: any) => {
    callback(error, user);
  });
});
passport.use(local);

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

app.post("/register", (req, res, next) => {
  const { username, password, photoURL, email, confirmPassword } = req.body;
  if (confirmPassword !== password) {
    return res.status(200).send("Password must match.");
  }
  if (password.length < 7) {
    return res.status(200).send("Password must have at least 7 characters.");
  }
  if (username < 5) {
    return res.status(200).send("Username must have at least 5 characters.");
  }
  if (!email) {
    return res.status(200).send("Email address is required.");
  }
  Users.findOne({ username: username }, async (error: Error, doc: any) => {
    if (error) {
      throw error;
    }
    if (doc) {
      return res.status(200).send("Username already exist.");
    } else {
      const hashed_pwd = await bcrypt.hash(password, 10);
      const newUser = new Users({
        username: username,
        password: hashed_pwd,
        photoURL: photoURL,
        email: email,
      });
      await newUser.save();
      res.status(201).send("ok");
    }
  });
});
app.post("/login", (req, res, next) => {
  passport.authenticate(
    "local",
    { session: true },
    (error: Error, user: any, info: any) => {
      if (!user) {
        res.status(200).send("Invalid username(email) or password.");
      } else {
        req.logIn(user, (error) => {
          if (error) {
            throw error;
          } else {
            res.send("ok");
          }
        });
      }
    }
  )(req, res, next);
});
app.listen(3001, () => {
  console.log("Server started");
});
