import React, { useState } from "react";
import ButtonResetPost from "./buttonResetPost/ButtonResetPost";
import CommentTextArea from "./commentTextArea/CommentTextArea";

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
            <CommentTextArea
              commentContent={commentContent}
              setCommentContent={setCommentContent}
            />
          </div>
          <div>
            <ButtonResetPost
              commentContent={commentContent}
              setCommentContent={setCommentContent}
              setHide={setHide}
            />
          </div>
        </>
      )}
    </>
  );
};

export default CommentForm;
