import { NextApiRequest, NextApiResponse } from "next";
import "../mongodb";
import { Student } from "../mongodb";
export const config = {
  api: {
    bodyParser: true,
    externalResolver: true,
  },
};
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).json({
      message: "You only create a student by POST method.",
      code: 405,
    });
    return;
  }
  (async () => {
    if (!req.body) {
      return res.status(500).json({
        code: 500,
        message: "Internal Sever Error.",
        ...{ helpMessage: "email, age and name required." },
      });
    }
    const { email, age, name } = await req.body;
    const student = await new Student({
      name,
      email,
      age,
    });
    await student.save();
    return res.json(student);
  })();
};
