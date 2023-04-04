import React from "react";
import CommentForm from "./commentComponent/CommentForm";
import CommentComponent from "./commentComponent/CommentComponent";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useSession } from "next-auth/react";
import { IUserSession } from "@/pages/api/blog-post/handle";
import LoginComponent from "../login/Login";

export interface ICommentData {
  _id: string;
  commentContent: string;
  createdAt: string;
}

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
    return <h5>"Loading...."</h5>;
  }

  return (
    <article className="blog-post px-3 py-5 p-md-5">
      <div className="container single-col-max-width">
        <header className="blog-post-header">
          <h1 className="mb-2">{parsedFullBlogPostData?.title}</h1>
          <p className="meta mb-3">{parsedFullBlogPostData?.description}</p>

          <p className="date">
            {formatDistanceToNow(new Date(parsedFullBlogPostData?.updatedAt), {
              addSuffix: true,
            })}
          </p>
        </header>
      </div>
      <div className="mb-5">
        <div
          className="blog-post-body"
          dangerouslySetInnerHTML={{ __html: parsedFullBlogPostData?.bodyHTML }}
        />
      </div>

      {["admin", "author", "reader"].includes(session?.user?.role) ? (
        <CommentForm />
      ) : (
        <LoginComponent />
      )}
      {parsedAllCurrentCommentData?.map((commentData: ICommentData) => (
        <CommentComponent key={commentData?._id} commentData={commentData} />
      ))}
    </article>
  );
};

export default DisplayPost;
