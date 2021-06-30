import { NextApiRequest, NextApiResponse } from "next";
import Shortcut from "../../../db";
export const config = {
  api: {
    bodyParser: true,
    externalResolver: true,
  },
};
export default async (req, res) => {
  const {
    username,
    email,
    shortcut: shortcutValue,
    shortcutImage,
    userImage,
  } = req.body;
  if (req.method === "POST") {
    await Shortcut.findOne({ shortcut: shortcutValue }, (error, doc) => {
      if (doc?.email === email) {
        return res.status(200).json({
          code: 200,
          message: "Already exists",
        });
      }
    });
    await Shortcut.create(
      {
        username: username,
        email: email,
        shortcut: shortcutValue,
        userImage: userImage,
        shortcutImage: shortcutImage,
      },
      (error, doc) => {
        if (error) {
          return res.status(500).json({
            code: 500,
            message: "Internal server error",
          });
        }
        return res.status(200).json(doc);
      }
    );
  } else {
    return res.status(500).json({
      code: 500,
      message: "Internal server error",
    });
  }
};
