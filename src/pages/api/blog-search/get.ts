//server side regex ?
// pass protection not required
//a post contains all words in any order
// handle
//post - create new blog post
//put / patch ? - edit blog post
//delete - delete blog post
//pass protected and role authority also applies
//admin has access to all
//author only to associated / self created items

import type { NextApiRequest, NextApiResponse } from "next";

import { apiSearchBlogPost } from "../../../../apiControllers/blogSearch/apiHandlerController";

export default async function blogSearchHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    apiSearchBlogPost(req, res);
  }

  if (req.method !== "POST") {
    return res.status(400).json({
      msg: "only POST requests",
    });
  }
}
