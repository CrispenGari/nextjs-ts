import mongoose, { mongo } from "mongoose";
const Profile = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
const User = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profiles: [Profile],
});
export default mongoose.model("users", User);
