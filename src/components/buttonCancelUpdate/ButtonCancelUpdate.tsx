import React, { useState } from "react";

import { useTextEditorContext } from "../textEditor/hooks/useTextEditorContext";
import { fetchEditBlogPost } from "@/fetchApiCalls/fetchApiCalls";
import { useSession } from "next-auth/react";
import { IUserSession } from "@/pages/api/blog-post/handle";
import { routerPush } from "@/util/routerPush";
import { useRouter } from "next/router";

const ButtonCancelUpdate = () => {
  const { title, description, delta, htmlData } = useTextEditorContext();
  const { data: sessionData } = useSession();
  const session: IUserSession = sessionData as IUserSession;
  let authorId: string = session?.user?._id;
  const [error, setError] = useState<string | null>(null);

  const { query } = useRouter();
  console.log(query?.id, "query id");

  const onClickHandler = async () => {
    if (
      title === "" ||
      description === "" ||
      htmlData === "" ||
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
    await fetchEditBlogPost(
      query?.id as string,
      title,
      description,
      delta,
      htmlData
    );
  };

  return (
    <>
      <div className="text-end">
        <button
          className="btn btn-outline-secondary mx-2"
          onClick={() => routerPush("/panel")}
        >
          Cancel
        </button>
        <button
          className="btn btn-outline-success mx-2"
          onClick={onClickHandler}
        >
          Update
        </button>
      </div>

      <br />
      <div className="text-center">
        {error && <span className="error-text p-2">{error}</span>}
      </div>
    </>
  );
};

export default ButtonCancelUpdate;
