import ButtonCancelSave from "../buttonCancelSave/ButtonCancelSave";
import InputTextComponent from "./inputText/InputTextComponent";
import QuillComponent from "./quill/QuillComponent";
import { useTextEditorContext } from "./hooks/useTextEditorContext";
import { useEffect } from "react";

const EditTextEditor = () => {
  const { title, htmlData } = useTextEditorContext();

  console.log(title, "using the usecontext");
  useEffect(() => {
    if (!htmlData) return;
    console.log(htmlData);
  }, [htmlData]);

  return (
    <div className="login-form-bg  pt-5 pb-5 pe-md-5 px-md-5 mb-5">
      <div className="texteditor-form">
        <InputTextComponent />
        <QuillComponent />
      </div>
    </div>
  );
};

export default EditTextEditor;
