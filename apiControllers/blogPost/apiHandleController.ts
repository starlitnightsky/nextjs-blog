import connectDb from "../../db/connectDb/connectDb";
import Post from "../../db/schema/Post";
import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

export interface PostData {
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

/**
 * 
 * @param req 
 * @param res 
 * @returns 
 * 
 * create a new blog post 
 * needs author / admin account
 */
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

/**
 * 
 * @param req 
 * @param res 
 * @returns 
 * 
 * get parted blog posts 
 */
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

/**
 * 
 * @param req 
 * @param res 
 * @returns 
 * 
 * get blog post count
 */
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

/**
 * 
 * @param req 
 * @param res 
 * @param session 
 * @returns 
 * 
 * get all current author created blog posts
 * if admin get all posts
 */
export const apiGetAllCurrentAuthorAdminBlogPost = async (
  req: NextApiRequest,
  res: NextApiResponse,
  session: any
) => {
  connectDb();

  const currentUserRole = session?.user?.role;
  const currentUserId = session?.user?._id;
  let allPosts: undefined | PostData | PostData[] | any[];

  if (currentUserRole === "admin") {
    // if admin get all posts
    try {
      allPosts = await Post.find({},{bodyHTML:0,
        bodyDelta:0
      }).sort({
        updatedAt: -1,
      });
    } catch (error: ErrorData | any) {
      return res.status(400).json({ error: error.message });
    }
  } else if (currentUserRole === "author") {
    // if authror get all current author created posts
    try {
      allPosts = await Post.find({ authorId: currentUserId },{bodyHTML:0,
        bodyDelta:0
      }).sort({
        updatedAt: -1,
      });
    } catch (error: ErrorData | any) {
      return res.status(400).json({ error: error.message });
    }
  }

  return res.status(200).json(allPosts);
};

/**
 * 
 * @param req 
 * @param res 
 * @param session 
 * @returns 
 * 
 * delete post - requires author / admin accout
 * 
 * admin can delete all records
 * 
 * author can only delete current author created account
 */
export const apiDeletePostCurrentAuthorAdmin = async (
  req: NextApiRequest,
  res: NextApiResponse,
  session: any
) => {
  connectDb();

  const currentUserRole = session?.user?.role;
  const currentUserId = session?.user?._id;
  const postId = req?.body?.postId;

  let allPosts: undefined | PostData | PostData[] | any[];

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(404).json({ error: "no such record" });
  }

  if (currentUserRole === "admin") {
    // if admin find the post and delete
    try {
      allPosts = await Post.findOneAndDelete({ _id: postId }).sort({
        updatedAt: -1,
      });

      if (!allPosts) {
        return res.status(404).json({ error: "does not match/ no records" });
      }
    } catch (error: ErrorData | any) {
      return res.status(400).json({ error: error.message });
    }
  } else if (currentUserRole === "author") {
    // if authror check for postid and check if the authorid matches and delete
    try {
      allPosts = await Post.findOneAndDelete({
        _id: postId,
        authorId: currentUserId,
      }).sort({
        updatedAt: -1,
      });

      if (!allPosts) {
        return res.status(404).json({
          error:
            "does not match. Check ids / check if current user has permission.",
        });
      }
    } catch (error: ErrorData | any) {
      return res.status(400).json({ error: error.message });
    }
  }

  return res.status(202).json({ success: "deleted post" });
};