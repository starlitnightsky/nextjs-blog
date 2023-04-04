import React from "react";

const CommentTextArea = ({ commentContent, setCommentContent }: any) => {
  return (
    <div className="">
      <p>Post a new comment.</p>
      <textarea
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
        placeholder="ya ?"
        className=" form-control"
        style={{ minHeight: "200px" }}
      />
    </div>
  );
};

export default CommentTextArea;
