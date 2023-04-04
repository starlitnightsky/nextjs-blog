import { routerPush } from "@/util/routerPush";
import React from "react";


interface Props {
  postId: string;
}

const ButtonReadMore = ({ postId }: Props) => {
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
