import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { ICommentData } from "../DisplayPost";

interface Props {
  commentData: ICommentData;
}

const CommentComponent = ({ commentData }: Props) => {
  return (
    <>
      <p>-----</p>
      <p>{commentData.commentContent}</p>
      <p>
        {formatDistanceToNow(new Date(commentData.createdAt), {
          addSuffix: true,
        })}
      </p>
      <p>-----</p>
    </>
  );
};

export default CommentComponent;
