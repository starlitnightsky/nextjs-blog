import React from "react";
import CommentForm from "./commentComponent/CommentForm";
import CommentComponent from "./commentComponent/CommentComponent";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useSession } from "next-auth/react";
import { IUserSession } from "@/pages/api/blog-post/handle";
import LoginComponent from "../login/Login";

const DisplayPost = ({
  parsedFullBlogPostData,
  parsedAllCurrentCommentData,
}: any) => {
  const { data: sessionData, status } = useSession();
  const session: IUserSession = sessionData as IUserSession;
  console.log(session, status);

  console.log(parsedFullBlogPostData);

  if (typeof parsedFullBlogPostData === "undefined") {
    return <h2>Please check blog post id .</h2>;
  }

  if (status === "loading") {
    return "Loading....";
  }

  return (
    <>
      <div>
        <h1>{parsedFullBlogPostData?.title}</h1>
        <p>{parsedFullBlogPostData?.description}</p>

        <p>
          {formatDistanceToNow(new Date(parsedFullBlogPostData?.updatedAt), {
            addSuffix: true,
          })}
        </p>
      </div>
      <div>
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: parsedFullBlogPostData?.bodyHTML }}
        />
      </div>

      {["admin", "author", "reader"].includes(session?.user?.role) ? (
        <CommentForm />
      ) : (
        <LoginComponent />
      )}
      {parsedAllCurrentCommentData?.map((commentData: any) => (
        <CommentComponent key={commentData?._id} commentData={commentData} />
      ))}
    </>
  );
};

export default DisplayPost;
