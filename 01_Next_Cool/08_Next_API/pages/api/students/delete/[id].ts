import { NextApiRequest, NextApiResponse } from "next";
import "../mongodb";
import { Student } from "../mongodb";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  if (req.method !== "DELETE") {
    return res.status(405).json({
      message: "You only DELETE a student(s) using DELETE method.",
      code: 405,
    });
  }
  if (!id) {
    return res.status(500).json({
      code: 500,
      help: "_id/id required",
      message: "Failed to delete the student of id null.",
    });
  }
  await Student.findByIdAndDelete(id)
    .then(() => {
      return res.status(204).json({
        code: 204,
        message: "Deleted",
      });
    })
    .catch((error) => {
      return res.status(500).send({
        code: 500,
        message: error.message,
      });
    });
};
