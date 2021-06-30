import mongoose from "mongoose";

const Shortcut = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  shortcut: {
    type: String,
    required: true,
  },
  shortcutImage: {
    type: String,
    required: false,
  },
  userImage: {
    type: String,
    required: false,
  },
});

export default mongoose.models.Shortcuts ??
  mongoose.model("Shortcuts", Shortcut);
