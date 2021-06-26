import { NextApiRequest, NextApiResponse } from "next";
import "../mongodb";
import { Student } from "../mongodb";

export const config = {
  api: {
    bodyParser: true,
    externalResolver: true,
  },
};
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (req.method !== "PUT") {
    return res.status(405).json({
      message: "You only UPDATE a student(s) using PUT/PATCH method.",
      code: 405,
    });
  }
  if (!id) {
    return res.status(500).json({
      code: 500,
      help: "_id/id required",
      message: "Failed to update the student of id null.",
    });
  }

  if (!req.body) {
    return res.status(500).json({
      code: 500,
      message: "Internal Sever Error.",
      ...{ helpMessage: "should update name, email and age." },
    });
  }
  const { email, age, name } = req.body;
  await Student.findByIdAndUpdate(id, {
    $set: {
      email: email,
      age: age,
      name: name,
    },
  })
    .then(() => {
      return res.status(204).json({
        code: 204,
        message: "Updated",
      });
    })
    .catch((error) => {
      return res.status(500).send({
        code: 500,
        message: error.message,
      });
    });
};
