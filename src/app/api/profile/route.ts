import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  profile: {
    lastName: string;
    firstName: string;
    age: number;
    title: string;
    job: string;
  };
};

export default function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({
    profile: {
      age: 28,
      firstName: "Vuong",
      job: "Manabie",
      lastName: "Do",
      title: "Front-end developer",
    },
  });
}
