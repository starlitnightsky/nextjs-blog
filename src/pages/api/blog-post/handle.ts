// handle
//post - create new blog post
//put / patch ? - edit blog post
//delete - delete blog post
//pass protected and role authority also applies
//admin has access to all
//author only to associated / self created items


import type { NextApiRequest, NextApiResponse } from "next";

import { apiCreateBlogPost } from "../../../../apiControllers/blogPost/apiHandleController";

export default async function blogPostHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(400).json({ error: "POST methods only" });
  }

  if (req.method === "POST") {
    console.log(req.body);
    apiCreateBlogPost(req, res);
  }
}

