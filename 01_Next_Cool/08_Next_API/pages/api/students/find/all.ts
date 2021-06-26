import { NextApiRequest, NextApiResponse } from "next";
import "../mongodb";
import { Student } from "../mongodb";
import { IStudent } from "../../../../types";
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({
      message: "You only get a student(s) by GET method.",
      code: 405,
    });
  }
  await Student.find({}, (error: Error, doc: IStudent) => {
    if (error) {
      return res.status(500).json({
        code: 500,
        message: error?.message,
      });
    }
    return res.status(200).send(doc);
  });
};
