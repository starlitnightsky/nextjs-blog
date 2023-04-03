import ButtonCancelSave from "../buttonCancelSave/ButtonCancelSave";
import InputTextComponent from "./inputText/InputTextComponent";
import QuillComponent from "./quill/QuillComponent";
import { useTextEditorContext } from "./hooks/useTextEditorContext";
import { useEffect } from "react";
const TextEditor = () => {
  const { title, htmlData } = useTextEditorContext();
  console.log(title, "using the usecontext");

  useEffect(() => {
    if (!htmlData) return;
    console.log(htmlData);
  }, [htmlData]);

  return (
    <>
      <InputTextComponent />
      <QuillComponent />
      <ButtonCancelSave />
    </>
  );
};

export default TextEditor;
