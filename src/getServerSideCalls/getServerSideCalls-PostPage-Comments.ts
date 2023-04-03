import { PostData } from "../../apiControllers/blogPost/apiHandleController";
import connectDb from "../../db/connectDb/connectDb";
import Post from "../../db/schema/Post";
import Comment from "../../db/schema/Comment";

/**
 *
 * @returns fullBlogPostData allCurrentCommentData
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
export const serverSideBlogSinglePost: (context: any) => Promise<any> = async (
  context
) => {
  connectDb();
  const { query, params, resolvedUrl } = context;

  console.log("oofffffffff", query);
  console.log("oofffffffff", params);
  console.log("oofffffffff", resolvedUrl);

  let fullBlogPostData: any = await getFullBlogPost(params);
  let allCurrentCommentData: any = await getAllBlogComments(params);

  return { fullBlogPostData, allCurrentCommentData };
};

/**
 *
 * @returns stringyfied json [] | []
 *
 * returns a single blog post based on params id
 *
 * returns an array instance []
 */
const getFullBlogPost: (params: any) => Promise<any> = async (params: any) => {
  let _id = params?.id;
  let blogPostData: any[] | string | any;

  try {
    blogPostData = await Post.find(
      { _id },
      {
        authorId: 0,
        bodyDelta: 0,
        __v: 0,
      }
    );
    blogPostData = JSON.stringify(blogPostData);
  } catch (error: any) {
    blogPostData = JSON.stringify([]);
  }

  return blogPostData;
};

/**
 *
 * @param params
 * @returns []
 *
 * sends a stringyfied [] , makes sure to json parse on the client side
 *
 * always returns a [] or string of array
 * gets the current blog post id from the params id (url id)
 */
const getAllBlogComments = async (params: any) => {
  let postId = params?.id;
  let allBlogComments: any[] | string | any;

  try {
    allBlogComments = await Post.find({ postId });
    allBlogComments = JSON.stringify(allBlogComments);
  } catch (error: any) {
    allBlogComments = JSON.stringify([]);
  }

  return allBlogComments;
};
