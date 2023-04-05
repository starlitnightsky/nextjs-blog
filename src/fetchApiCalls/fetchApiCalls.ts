import { routerPush } from "@/util/routerPush";

//fetch api call functions here
export const domain = "http://localhost:3000";
/**
 *
 * @param title
 * @param bodyDelta
 * @param bodyHTML
 * @param authorId
 *
 * client side - fetch api
 *
 * create blog post
 *
 * requires admin / author account
 *
 *
 */
export const fetchCreateBlogPost = async (
  title: string,
  description: string,
  bodyDelta: any,
  bodyHTML: string,
  authorId: string
) => {
  const newDelta = JSON.stringify(bodyDelta);
  try {
    const response = await fetch("/api/blog-post/handle", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        bodyDelta: newDelta,
        bodyHTML,
        authorId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log("error", json.error);
    }

    if (response.ok) {
      console.log("success", json);
      routerPush("/");
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchGetBlogCount = async () => {
  try {
    const response = await fetch("/api/blog-post/get-all", {
      method: "GET",
    });
    const json = await response.json();

    if (!response.ok) {
      console.log("error", json.error);
    }

    if (response.ok) {
      console.log("success", json);
      return json;
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchCreateBlogComment = async (
  commenterId: string,
  commentContent: string,
  postId: string
) => {
  try {
    const response = await fetch("/api/blog-comment/handle", {
      method: "POST",
      body: JSON.stringify({
        commenterId,
        commentContent,
        postId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log("error", json.error);
      return { sucess: false };
    }

    if (response.ok) {
      console.log("success", json);
      return { sucess: true };
    }
  } catch (error) {
    console.log("error", error);
    return { sucess: false };
  }
};
