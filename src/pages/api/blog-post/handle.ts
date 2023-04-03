// handle
//post - create new blog post
//put / patch ? - edit blog post
//delete - delete blog post
//pass protected and role authority also applies
//admin has access to all
//author only to associated / self created items


import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { apiCreateBlogPost } from "../../../../apiControllers/blogPost/apiHandleController";
import { authOptions } from "../auth/[...nextauth]";

export default async function blogPostHandler(
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
    return res.status(400).json({ error: "POST methods only" });
  }

  if (req.method === "POST") {
    console.log(req.body);
    apiCreateBlogPost(req, res);
  }
}

