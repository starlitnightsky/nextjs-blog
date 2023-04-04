import React from "react";
import { redirectHome } from "../login/loginUtil";
import { useTextEditorContext } from "../textEditor/hooks/useTextEditorContext";
import { fetchCreateBlogPost } from "@/fetchApiCalls/fetchApiCalls";
import { useSession } from "next-auth/react";
import { IUserSession } from "@/pages/api/blog-post/handle";

const ButtonCancelSave = () => {
  const { title, description, delta, htmlData } = useTextEditorContext();
  const { data: sessionData } = useSession();
  const session: IUserSession = sessionData as IUserSession;
  let authorId: string = session?.user?._id;

  const onClickHandler = () => {
    /**
     *   title,
        bodyDelta,
        bodyHTML,
        authorId,
     */
    console.log("oof ");
    fetchCreateBlogPost(title, description, delta, htmlData, authorId);
  };

  return (
    <>
      <button className="btn btn-outline-secondary" onClick={redirectHome}>
        Cancel
      </button>
      <button className="btn btn-outline-success" onClick={onClickHandler}>
        Save
      </button>
    </>
  );
};

export default ButtonCancelSave;
