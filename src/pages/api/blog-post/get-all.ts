//two types
//data split version for pagination
//get posts associated with a user
import type { NextApiRequest, NextApiResponse } from "next";

import {
  apiGetAllBlogPost,
  apiGetAllBlogCount,
} from "../../../../apiControllers/blogPost/apiHandleController";

export default async function blogPostGetAll(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    apiGetAllBlogPost(req, res);
  }

  if (req.method === "GET") {
    apiGetAllBlogCount(req, res);
  }
}
