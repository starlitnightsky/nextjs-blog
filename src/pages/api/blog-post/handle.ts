// handle
//post - create new blog post
//put / patch ? - edit blog post
//delete - delete blog post
//pass protected and role authority also applies
//admin has access to all
//author only to associated / self created items


import type { NextApiRequest, NextApiResponse } from "next";

import { getToken } from "next-auth/jwt";
import { apiCreateBlogPost } from "../../../../apiControllers/blogPost/apiHandleController";

const secret = process.env.NEXTAUTH_JWT_SECRET;

export default async function blogPostHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  /**
   *  If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
   *
   * modified token object contains email , role , createdAt , _id
   */
  //
  const token: any = await getToken({ req, secret });

  if (!token) {
    // if valid token does not exist
    res.status(401).json({
      message: "no valid token",
      token,
    });
    return;
  }

  if (!["admin", "author"].includes(token?.token?.role)) {
    // if curent user not an admin or author
    // catch them
    res.status(401).json({
      message: "only admin / author accoutns allowed",
      token,
    });
    return;
  }

  if (req.method !== "POST") {
    return res.status(400).json({
      error: "POST methods only",
      token,
    });
  }

  if (req.method === "POST") {
    console.log(req.body);
    apiCreateBlogPost(req, res);
  }
}

