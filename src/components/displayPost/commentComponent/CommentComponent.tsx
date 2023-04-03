import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const CommentComponent = ({ commentData }: any) => {
  return (
    <>
      <p>-----</p>
      <p>{commentData.commentContent}</p>
      <p>
        {formatDistanceToNow(new Date(commentData.createdAt), {
          addSuffix: true,
        })}
      </p>
      <p>-----</p>
    </>
  );
};

export default CommentComponent;
