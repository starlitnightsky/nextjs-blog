import type { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../../../db/connectDb/connectDb";
import User from "../../../../db/schema/User";

interface UserData {
  email: string;
  password: string;
  role: string;
}

interface ErrorData {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(400).json({ error: "POST methods only" });
  }

  const { email, password, role } = req.body;
  let newUser: undefined | UserData;
  connectDb();
  try {
    newUser = await User.signup(email, password, role);
  } catch (error: ErrorData | any) {
    // console.log(error);
    return res.status(400).json({ error: error.message });
  }

  return res
    .status(201)
    .json({ user: { email: newUser?.email, role: newUser?.role } });
}
