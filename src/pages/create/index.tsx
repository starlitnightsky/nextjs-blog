import TextEditor from "@/components/textEditor/TextEditor";
import React from "react";
import TextEditorContextProvider from "@/components/textEditor/hooks/textEditorContext";
import { useSession } from "next-auth/react";
import LoginComponent from "@/components/login/Login";

const CreatePost = () => {
  const { data: session, status } = useSession();

  console.log(session, status);

  if (status === "loading") {
    return "Loading or not authenticated...";
  }

  if (["admin", "author"].includes(session?.user?.role)) {
    return (
      <TextEditorContextProvider>
        <TextEditor />
      </TextEditorContextProvider>
    );
  }

  if (["reader"].includes(session?.user?.role)) {
    return (
      <h2>
        Attention: you need an author / admin account to post new articles!
      </h2>
    );
  }

  return <LoginComponent />;
};

export default CreatePost;
