import mongoose from "mongoose";

import connection from "./connections";
import Shortcut from "./models";
mongoose.connect(
  connection,
  {
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (error) => {
    if (error) {
      console.log("Error while trying to connect to mongodb");
      return;
    }
    console.log("Connected to mongodb");
  }
);

mongoose.connection.once("open", () => {
  console.log("Connection open");
});

export default Shortcut;
