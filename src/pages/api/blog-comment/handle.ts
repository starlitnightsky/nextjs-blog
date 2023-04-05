// handle
//post - create new blog comment
//pass protected - all roles allowed


import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { apiCreateBlogComment } from "../../../../apiControllers/blogComment/apiHandleController";

export default async function blogCommentHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  /**
   *  get session for api route protection
   */
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    // if valid session does not exist
    res.status(401).json({ message: "You must be logged in." });
    return;
  }

  // valid sessison then move forward with rest of code
  // test getserver session is working
  // return res.json({
  //   message: "Success",
  // });

  if (req.method !== "POST") {
    return res.status(400).json({ error: "POST methods only", session });
  }

  if (req.method === "POST") {
    // console.log(req.body);
    apiCreateBlogComment(req, res);
  }
}

