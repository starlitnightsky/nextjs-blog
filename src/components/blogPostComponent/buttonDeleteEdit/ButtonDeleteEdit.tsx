import { fetchDelteAuthorAdminBlogPost } from "@/fetchApiCalls/fetchApiCalls";
import { routerPush } from "@/util/routerPush";
import React, { useState } from "react";

interface Props {
  postId: string;
}

const ButtonDeleteEdit = ({ postId }: Props) => {
  const [confirmDel, setConfirmDel] = useState(false);

  const redirectEditPost = (postId: string) => {
    routerPush(`/edit/${postId}`);
  };

  const deleteHandler = (postId: string) => {
    // console.log("postId", postId);
    setConfirmDel((prev) => !prev);
  };

  const cancelHandler = () => {
    setConfirmDel((prev) => !prev);
  };

  const comfirmDeleteHandler = (postId: string) => {
    // console.log("postId", postId);
    // setConfirmDel(false);
    fetchDelteAuthorAdminBlogPost(postId);
  };

  return (
    <>
      {!confirmDel && (
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
      )}
      {confirmDel && (
        <>
          <button
            className="btn btn-outline-secondary p-1 mx-2"
            // style={{ height: "auto", width: "300px" }}
            onClick={() => cancelHandler()}
          >
            {`Back`}
          </button>
          <button
            className="btn btn-outline-danger p-1 mx-2"
            // style={{ height: "auto", width: "300px" }}
            onClick={() => comfirmDeleteHandler(postId)}
          >
            {`Confirm`}
          </button>
        </>
      )}
    </>
  );
};

export default ButtonDeleteEdit;
