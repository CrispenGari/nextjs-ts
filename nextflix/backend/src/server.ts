import express, { Application, request } from "express";
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
    useFindAndModify: true,
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

app.use(cors());
app.use(express.json());

// ----------- ROUTES

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Netflix Server",
  });
});

app.get("/users", (req, res) => {
  User.find({}, (error, doc) => {
    if (error) {
      throw error;
    }
    res.status(200).send(doc);
  });
});
app.get("/profiles/:email", (req, res) => {
  const { email } = req.params;
  User.findOne({ email: email }, (error: any, doc: any) => {
    if (error) {
      res.status(500).send(error);
    }
    if (!doc) {
      res.status(404).send({
        status: 404,
        message: `Unable to find ${email}`,
      });
    } else {
      res.status(200).send(doc);
    }
  });
});
app.patch("/new/profile/:email", (req, res) => {
  const { email } = req.params;
  const { name, avatar } = req.body;
  User.findOneAndUpdate(
    { email: email },
    {
      $push: {
        profiles: {
          name: name,
          avatar: avatar,
        },
      },
    }
  )
    .then((doc) => {
      res.status(204).send(doc);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
app.post("/new/user", (req, res) => {
  const { email } = req.body;
  if (email) {
    const user = new User({
      email: email,
    });
    user.save();
    res.status(201).send(user);
  } else {
    res.status(500).send({
      error: "Internal Sever Error.",
    });
  }
});

app.listen(PORT, () => console.log("THE SERVER IS RUNNING"));
