import TextEditor from "@/components/textEditor/TextEditor";
import React, { useState } from "react";
import textEditorContextProvider from "@/components/textEditor/hooks/textEditorContext";

const CreatePost = () => {
  const [title, setTitle] = useState<string>("");
  const [delta, setDelta] = useState("");
  return (
    <textEditorContextProvider>
      <TextEditor />
    </textEditorContextProvider>
  );
};

export default CreatePost;
