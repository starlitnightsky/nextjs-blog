import connectDb from "../../db/connectDb/connectDb";

import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

import Comment from "../../db/schema/Comment";

interface CommentData {
  title: string;
  bodyDelta: any;
  bodyHTML: string;
  authorId: string;
}

interface ErrorData {
  message: string;
}

export const apiCreateBlogComment = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  connectDb();

  const { commenterId, commentConnent, postId } = req.body;
  let newComment: undefined | CommentData | any[];

  if (commenterId === "" || commentConnent === "" || postId === "") {
    return res.status(400).json({ error: "fill all fields" });
  }

  if (
    !mongoose.isValidObjectId(postId) ||
    !mongoose.isValidObjectId(commenterId)
  ) {
    return res.status(400).json({ error: "send valid object id" });
  }

  try {
    newComment = await Comment.create({ commenterId, commentConnent, postId });
  } catch (error: ErrorData | any) {
    // console.log(error);
    return res.status(400).json({ error: error.message });
  }

  return res.status(201).json(newComment);
};
