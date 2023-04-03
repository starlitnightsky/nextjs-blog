import React from "react";
import CommentForm from "./commentComponent/CommentForm";
import CommentComponent from "./commentComponent/CommentComponent";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const DisplayPost = ({
  parsedFullBlogPostData,
  parsedAllCurrentCommentData,
}: any) => {
  console.log(parsedFullBlogPostData);

  if (typeof parsedFullBlogPostData === "undefined") {
    return <h2>Please check blog post id .</h2>;
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

      <CommentForm />
      {parsedAllCurrentCommentData?.map((commentData: any) => (
        <CommentComponent key={commentData?._id} commentData={commentData} />
      ))}
    </>
  );
};

export default DisplayPost;
