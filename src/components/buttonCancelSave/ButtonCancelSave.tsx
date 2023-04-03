import React from "react";
import { redirectHome } from "../login/loginUtil";
import { useTextEditorContext } from "../textEditor/hooks/useTextEditorContext";
import { fetchCreateBlogPost } from "@/fetchApiCalls/fetchApiCalls";
import { useSession } from "next-auth/react";

const ButtonCancelSave = () => {
  const { title, delta, htmlData } = useTextEditorContext();
  const { data: session } = useSession();
  let authorId: string = session?.user?._id;

  const onClickHandler = () => {
    /**
     *   title,
        bodyDelta,
        bodyHTML,
        authorId,
     */
    console.log("oof ");
    fetchCreateBlogPost(title, delta, htmlData, authorId);
  };

  return (
    <>
      <button onClick={redirectHome}>Cancel</button>
      <button onClick={onClickHandler}>Save</button>
    </>
  );
};

export default ButtonCancelSave;
