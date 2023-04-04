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
    <div className="text-end">
      <button className="btn btn-outline-secondary mx-2" onClick={redirectHome}>
        Cancel
      </button>
      <button className="btn btn-outline-success mx-2" onClick={onClickHandler}>
        Save
      </button>
    </div>
  );
};

export default ButtonCancelSave;
