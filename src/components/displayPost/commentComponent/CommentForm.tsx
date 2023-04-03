import React, { useState } from "react";
import ButtonResetPost from "./buttonResetPost/ButtonResetPost";

const CommentForm = () => {
  const [commentContent, setCommentContent] = useState("");
  const [hide, setHide] = useState(true);
  return (
    <>
      <button onClick={() => setHide((prev) => !prev)}>
        {hide ? "Post a comment" : "Hide"}
      </button>
      {!hide && (
        <>
          <div>
            <textarea
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
              placeholder="ya ?"
            />
          </div>
          <ButtonResetPost
            commentContent={commentContent}
            setCommentContent={setCommentContent}
            setHide={setHide}
          />
        </>
      )}
    </>
  );
};

export default CommentForm;
