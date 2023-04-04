import { routerPush } from "@/util/routerPush";
import React from "react";

const ButtonReadMore = ({ postId }: any) => {
  const redirectPost = (postId: string) => {
    routerPush(`/post/${postId}`);
  };

  return (
    <button
      className="btn btn-outline-primary"
      // style={{ height: "auto", width: "300px" }}
      onClick={() => redirectPost(postId)}
    >
      {`Read More...`}
    </button>
  );
};

export default ButtonReadMore;
