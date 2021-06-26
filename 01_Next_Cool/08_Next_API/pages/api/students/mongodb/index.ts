import mongoose, { mongo } from "mongoose";
import connection from "../../../../db/connection";
import Students from "../../../../db/models";
export default mongoose.connect(
  connection,
  {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
  },
  (error: Error) => {
    if (error) {
      return error;
    }
    console.log("Connected to mongodb");
  }
);

export const Student = mongoose.models.Student
  ? mongoose.models.Student
  : Students;
mongoose.connection.once("open", (error: Error) => {
  console.log("MongoDB connection open");
});
