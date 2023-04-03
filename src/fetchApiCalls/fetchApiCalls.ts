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
    }
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchGetBlogCount = async () => {
  try {
    const response = await fetch(domain + "/api/blog-post/get-all", {
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