import Shortcut from "../../../../db";
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async (req, res) => {
  if (!req.query?.email) {
    return res.status(500).json({
      message: "No email provided",
      code: 500,
    });
  }
  const { email } = await req.query;
  if (req.method !== "GET") {
    return res.status(500).json({
      message: "Internal Server Error",
      code: 500,
    });
  } else {
    await Shortcut.find({ email: email }, (error, doc) => {
      if (error) {
        return res.status(500).json({
          code: 500,
          message: "Internal Server Error",
        });
      } else {
        return res.status(200).json(doc);
      }
    });
  }
};
