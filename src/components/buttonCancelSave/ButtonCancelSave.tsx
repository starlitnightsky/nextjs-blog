import React from "react";
import { redirectHome } from "../login/loginUtil";
import { useTextEditorContext } from "../textEditor/hooks/useTextEditorContext";
import { fetchCreateBlogPost } from "@/fetchApiCalls/fetchApiCalls";

const ButtonCancelSave = () => {
  const { title, delta, htmlData } = useTextEditorContext();
  let authorId: string = "";

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
