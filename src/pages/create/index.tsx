import TextEditor from "@/components/textEditor/TextEditor";
import React, { useState } from "react";
import TextEditorContextProvider from "@/components/textEditor/hooks/textEditorContext";

const CreatePost = () => {
  const [title, setTitle] = useState<string>("");
  const [delta, setDelta] = useState("");
  return (
    <TextEditorContextProvider>
      <TextEditor />
    </TextEditorContextProvider>
  );
};

export default CreatePost;
