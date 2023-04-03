// handle
//post - create new blog comment
//pass protected - all roles allowed


import type { NextApiRequest, NextApiResponse } from "next";

import { apiCreateBlogComment } from "../../../../apiControllers/blogComment/apiHandleController";

export default async function blogCommentHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(400).json({ error: "POST methods only" });
  }

  if (req.method === "POST") {
    console.log(req.body);
    apiCreateBlogComment(req, res);
  }
}

