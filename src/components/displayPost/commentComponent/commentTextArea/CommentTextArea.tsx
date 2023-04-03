import React from "react";

const CommentTextArea = ({ commentContent, setCommentContent }: any) => {
  return (
    <div>
      <textarea
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
        placeholder="ya ?"
      />
    </div>
  );
};

export default CommentTextArea;
