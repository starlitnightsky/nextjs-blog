import React from "react";

const CommentComponent = ({ commentData }: any) => {
  return (
    <>
      <p>{commentData.commentContent}</p>
      <p>{commentData.createdAt}</p>
    </>
  );
};

export default CommentComponent;
