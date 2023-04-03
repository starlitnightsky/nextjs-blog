import React from "react";
import CommentForm from "./commentComponent/CommentForm";
import CommentComponent from "./commentComponent/CommentComponent";

const DisplayPost = () => {
  return (
    <>
      <div>
        <h1>Title here</h1>
      </div>
      <div>
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: "<h1>oof oof </h1>" }}
        />
      </div>

      <CommentForm />
      <CommentComponent />
    </>
  );
};

export default DisplayPost;
