import { routerPush } from "@/util/routerPush";
import routerReload from "@/util/routerReload";

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

export const fetchGetAuthorAdminBlogList = async (setParsedBlogPosts: any) => {
  try {
    const response = await fetch("/api/blog-post/handle", {
      method: "GET",
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
      setParsedBlogPosts(json);
    }
  } catch (error) {
    console.log("error", error);
    return { error };
  }
};

export const fetchDelteAuthorAdminBlogPost = async (postId: string) => {
  try {
    const response = await fetch("/api/blog-post/handle", {
      method: "DELETE",
      body: JSON.stringify({
        postId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log("error", json.error);
      routerReload();
    }

    if (response.ok) {
      console.log("success", json);
      routerReload();
    }
  } catch (error) {
    console.log("error", error);
    routerReload();
  }
};


export const fetchEditBlogPost = async (
  postId: string,
  title: string,
  description: string,
  bodyDelta: any,
  bodyHTML: string
) => {
  const newDelta = JSON.stringify(bodyDelta);
  try {
    const response = await fetch("/api/blog-post/handle", {
      method: "PUT",
      body: JSON.stringify({
        postId,
        title,
        description,
        bodyDelta: newDelta,
        bodyHTML,
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