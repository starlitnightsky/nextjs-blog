// handle
//post - create new blog post
//put / patch ? - edit blog post
//delete - delete blog post
//pass protected and role authority also applies
//admin has access to all
//author only to associated / self created items


import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

import {
  apiCreateBlogPost,
  apiDeletePostCurrentAuthorAdmin,
  apiEditPostCurrentAuthorAdmin,
  apiGetAllCurrentAuthorAdminBlogPost,
} from "../../../../apiControllers/blogPost/apiHandleController";
import { Session } from "next-auth";

const secret = process.env.NEXTAUTH_JWT_SECRET;

export interface IUserSessionData {
  email: string;
  role: string;
  createdAt: string;
  _id: string;
}
export interface IUserSession extends Session {
  user: IUserSessionData;
}

export default async function blogPostHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  /**
   *  get session for api route protection
   */
  const session: IUserSession | null = (await getServerSession(
    req,
    res,
    authOptions
  )) as IUserSession;

  if (!session) {
    // if valid session does not exist
    res.status(401).json({ message: "You must be logged in." });
    return;
  }

  if (!["admin", "author"].includes(session?.user?.role)) {
    // if curent user not an admin or author
    // catch them
    res.status(401).json({
      message: "only admin / author accoutns allowed",
      session,
    });
    return;
  }

  if (req.method === "GET") {
    apiGetAllCurrentAuthorAdminBlogPost(req, res, session);
  }

  if (req.method === "POST") {
    // console.log(req.body);
    apiCreateBlogPost(req, res);
  }

  if (req.method === "PUT") {
    apiEditPostCurrentAuthorAdmin(req, res, session);

    // return res.status(200).json({
    //   msg: "PUT req",
    //   id: req?.body,
    //   session,
    // });
  }

  if (req.method === "DELETE") {
    apiDeletePostCurrentAuthorAdmin(req, res, session);
  }
}

