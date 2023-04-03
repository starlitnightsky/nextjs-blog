import connectDb from "../../db/connectDb/connectDb";
import Post from "../../db/schema/Post";

/**
 *
 * @returns number
 *
 * serverSide blog count function
 *
 *
 * normal fetch calls to the sites own server failed on build
 * this is inline with what nextjs has stated in docs
 *
 * getServerside -> is essentially runs on server only -> directly execute the server code
 *
 *
 * next -> use context prop in getserversideprops and context.query.id to the params
 *
 * id if=> [id] .. and so on
 */
export const serverSideBlogCount: () => Promise<number> = async () => {
  connectDb();

  let allPostsCount: number | any;
  let allBlogCount: number = 0;
  try {
    allPostsCount = await Post.find({}).count();
    allBlogCount = allPostsCount as number;
  } catch (error: any) {
    allBlogCount = 0;
  }

  return allBlogCount;
};
