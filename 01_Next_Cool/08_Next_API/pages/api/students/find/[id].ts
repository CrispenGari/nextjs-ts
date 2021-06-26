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
  const { id } = await req.query;
  if (req.method !== "GET") {
    return res.status(405).json({
      message: "You only get a student(s) by GET method.",
      code: 405,
    });
  }
  if (!id) {
    return res.json({
      code: 500,
      message: "Student id is required.",
    });
  }

  try {
    Student.findById(id, (error: Error, doc: IStudent) => {
      if (!doc) {
        return res.status(404).json({
          code: 404,
          message: `Could not find the student of id ${id} in the database`,
        });
      }
      return res.status(200).send(doc);
    });
  } catch (err) {
    return res.status(500).end("Server Error");
  }
};
