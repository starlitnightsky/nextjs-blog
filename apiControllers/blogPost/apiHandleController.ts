import connectDb from "../../db/connectDb/connectDb";
import Post from "../../db/schema/Post";
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

interface PostData {
  title: string;
  bodyDelta: any;
  bodyHTML: string;
  authorId: string;
}

interface ErrorData {
  message: string;
}

export const apiCreateBlogPost = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  connectDb();

  const { title, bodyDelta, bodyHTML, authorId } = req.body;
  let newPost: undefined | PostData | any[];

  if (title === "" || bodyDelta === "" || bodyHTML === "" || authorId === "") {
    return res.status(400).json({ error: "fill all fields" });
  }

  if (!mongoose.isValidObjectId(authorId)) {
    return res.status(400).json({ error: "send valid object id" });
  }

  try {
    newPost = await Post.create({ title, bodyDelta, bodyHTML, authorId });
  } catch (error: ErrorData | any) {
    // console.log(error);
    return res.status(400).json({ error: error.message });
  }

  return res.status(201).json(newPost);
};
