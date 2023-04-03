import { routerPush } from "@/util/routerPush";
import React from "react";

const ButtonReadMore = ({ postId }: any) => {
  const redirectPost = (postId: string) => {
    routerPush(`/post/${postId}`);
  };

  return <button onClick={() => redirectPost(postId)}>Read More</button>;
};

export default ButtonReadMore;
