import { PostData } from "../../apiControllers/blogPost/apiHandleController";
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
export const serverSideBlogCount: (context: any) => Promise<any> = async (
  context
) => {
  connectDb();
  const { query, params, resolvedUrl } = context;

  console.log("oofffffffff", query);
  console.log("oofffffffff", params);
  console.log("oofffffffff", resolvedUrl);

  let allBlogCount: number = await getBlogCountOnly();
  let allBlogPostsInParts: any = await getBlogPostsInParts(params);

  return { allBlogCount, allBlogPostsInParts };
};

/**
 *
 * @returns number
 *
 * returns the total blog posts count
 *
 * always returns a number
 */
const getBlogCountOnly = async () => {
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

/**
 *
 * @param params
 * @returns []
 *
 * sends a stringyfied [] , makes sure to json parse on the client side
 *
 * always returns a [] or string of array
 */
const getBlogPostsInParts = async (params: any) => {
  let partNumber = params?.id;
  const itemsPerPage = 3;
  let allPosts: undefined | PostData | PostData[] | any[] | string;

  if (typeof partNumber === "undefined") {
    partNumber = 0;
  }

  if (typeof Number(partNumber) !== "number") {
    ("not all show items ?");
    allPosts = [];
    return allPosts;
  }

  try {
    allPosts = await Post.find({})
      .sort({
        updatedAt: -1,
      })
      .skip(partNumber * itemsPerPage)
      .limit(itemsPerPage);
  } catch (error: any) {
    return [];
  }
  allPosts = await JSON.stringify(allPosts);
  return allPosts;
};
