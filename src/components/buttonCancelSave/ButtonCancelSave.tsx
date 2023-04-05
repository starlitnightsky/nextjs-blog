import React, { useState } from "react";
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
  const [error, setError] = useState<string | null>(null);

  const onClickHandler = async () => {
    if (
      title === "" ||
      description === "" ||
      htmlData === "" ||
      authorId === "" ||
      delta === "" ||
      htmlData === "<p><br></p>"
    ) {
      setError("Fill all fields!");
      setTimeout(() => setError(null), 3000);
      return;
    }

    /**
     *   title,
        bodyDelta,
        bodyHTML,
        authorId,
     */
    console.log("oof ");
    await fetchCreateBlogPost(title, description, delta, htmlData, authorId);
  };

  return (
    <>
      <div className="text-end">
        <button
          className="btn btn-outline-secondary mx-2"
          onClick={redirectHome}
        >
          Cancel
        </button>
        <button
          className="btn btn-outline-success mx-2"
          onClick={onClickHandler}
        >
          Save
        </button>
      </div>

      <br />
      <div className="text-center">
        {error && <span className="error-text p-2">{error}</span>}
      </div>
    </>
  );
};

export default ButtonCancelSave;
