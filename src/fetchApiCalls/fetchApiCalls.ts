//fetch api call functions here
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