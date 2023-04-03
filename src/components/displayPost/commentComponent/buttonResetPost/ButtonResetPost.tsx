import LoginComponent from "@/components/login/Login";
import { fetchCreateBlogComment } from "@/fetchApiCalls/fetchApiCalls";
import { IUserSession } from "@/pages/api/blog-post/handle";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const ButtonResetPost = ({
  commentContent,
  setCommentContent,
  setHide,
}: any) => {
  const { data: sessionData } = useSession();
  const session: IUserSession = sessionData as IUserSession;
  let commenterId: string = session?.user?._id;

  const { query } = useRouter();
  console.log(query, "router data");
  const postId = query?.id as string;

  /**
   * reset the text area
   *
   */
  const resetHandler = () => {
    console.log("reset", commentContent);
    setCommentContent("");
  };

  /**
   *
   * @returns void
   *
   * post a new comment to the current post
   *
   *
   */
  const postCommentHandler = () => {
    if (commentContent !== "") {
      console.log("post this", commentContent);

      fetchCreateBlogComment(commenterId, commentContent, postId);
      setCommentContent("");
      setHide((prev: any) => !prev);
      return;
    }

    console.log("empty", commentContent);
  };

  return (
    <>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={postCommentHandler}>Post</button>
    </>
  );
};

export default ButtonResetPost;
