//fetch api call functions here
export const fetchCreateBlogPost = async (
  title: string,
  bodyDelta: any,
  bodyHTML: string,
  authorId: string
) => {
  try {
    const response = await fetch("/api/blog-post/handle", {
      method: "POST",
      body: JSON.stringify({
        title,
        bodyDelta,
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