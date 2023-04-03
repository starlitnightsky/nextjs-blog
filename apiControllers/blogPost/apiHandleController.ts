import connectDb from "../../db/connectDb/connectDb";
import Post from "../../db/schema/Post";
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

interface PostData {
  title: string;
  description: string;
  bodyDelta: any;
  bodyHTML: string;
  authorId: string;
}

interface ErrorData {
  error: string;
  message: string;
}

export const apiCreateBlogPost = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  connectDb();

  const { title, description, bodyDelta, bodyHTML, authorId } = req.body;
  let newPost: undefined | PostData | any[];

  if (
    title === "" ||
    description === "" ||
    bodyDelta === "" ||
    bodyHTML === "" ||
    authorId === ""
  ) {
    return res.status(400).json({ error: "fill all fields" });
  }

  if (!mongoose.isValidObjectId(authorId)) {
    return res.status(400).json({ error: "send valid object id" });
  }

  try {
    newPost = await Post.create({
      title,
      description,
      bodyDelta,
      bodyHTML,
      authorId,
    });
  } catch (error: ErrorData | any) {
    // console.log(error);
    return res.status(400).json({ error: error.message });
  }

  return res.status(201).json(newPost);
};

export const apiGetAllBlogPost = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  connectDb();

  const { partNumber } = req.body;
  const itemsPerPage = 3;

  if (partNumber === "") {
    return res.status(400).json({ error: "fill all fields" });
  }
  let allPosts: undefined | PostData | PostData[] | any[];
  try {
    allPosts = await Post.find({})
      .sort({
        updatedAt: -1,
      })
      .skip(partNumber * itemsPerPage)
      .limit(itemsPerPage);
  } catch (error: ErrorData | any) {
    return res.status(400).json({ error: error.message });
  }

  return res.status(200).json(allPosts);
};

export const apiGetAllBlogCount = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  connectDb();

  let allPostsCount: number | any;
  try {
    allPostsCount = await Post.find({}).count();
  } catch (error: ErrorData | any) {
    return res.status(400).json({ error: error.message });
  }

  return res.status(200).json(allPostsCount);
};