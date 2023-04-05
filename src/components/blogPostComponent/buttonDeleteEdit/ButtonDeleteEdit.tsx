import { routerPush } from "@/util/routerPush";
import React from "react";

interface Props {
  postId: string;
}

const ButtonDeleteEdit = ({ postId }: Props) => {
  const redirectEditPost = (postId: string) => {
    routerPush(`/edit/${postId}`);
  };

  const deleteHandler = (postId: string) => {
    console.log("postId", postId);
  };

  return (
    <>
      <button
        className="btn btn-outline-danger mx-2"
        // style={{ height: "auto", width: "300px" }}
        onClick={() => deleteHandler(postId)}
      >
        {`Delete`}
      </button>

      <button
        className="btn btn-outline-warning mx-2"
        // style={{ height: "auto", width: "300px" }}
        onClick={() => redirectEditPost(postId)}
      >
        {`Edit`}
      </button>
    </>
  );
};

export default ButtonDeleteEdit;
