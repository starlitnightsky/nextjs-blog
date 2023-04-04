import React, { useState } from "react";
import ButtonResetPost from "./buttonResetPost/ButtonResetPost";
import CommentTextArea from "./commentTextArea/CommentTextArea";

const CommentForm = () => {
  const [commentContent, setCommentContent] = useState("");
  const [hide, setHide] = useState(true);
  return (
    <>
      <button
        className="btn btn-outline-primary mb-5"
        onClick={() => setHide((prev) => !prev)}
      >
        {hide ? "Post a comment" : "Hide"}
      </button>
      {!hide && (
        <div className="login-form-bg pt-5 pb-5 px-md-5 pe-md-5 mb-5">
          <div className="login-form">
            <div className="row mb-2">
              <CommentTextArea
                commentContent={commentContent}
                setCommentContent={setCommentContent}
              />
            </div>
            <div className="text-end">
              <ButtonResetPost
                commentContent={commentContent}
                setCommentContent={setCommentContent}
                setHide={setHide}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommentForm;
