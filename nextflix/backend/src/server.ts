import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import connection_uri from "./connections";
import User from "./models";
const PORT: any = 3001 || process.env.PORT;
const app: Application = express();

// Connect to mongodb
mongoose.connect(
  connection_uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (error) => {
    if (error) {
      throw error;
    }
    console.log("Connected to MongoDB.");
  }
);

mongoose.connection.once("open", (error) => {
  if (error) {
    throw error;
  } else {
    console.log("Connection Open");
  }
});

// Midlewares

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

// ----------- ROUTES

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Netflix Server",
  });
});

app.get("/users", (req, res) => {});
app.post("/new_user", (req, res) => {});
app.post("/new_profile", (req, res) => {});

app.listen(PORT, () => console.log("THE SERVER IS RUNNING"));
