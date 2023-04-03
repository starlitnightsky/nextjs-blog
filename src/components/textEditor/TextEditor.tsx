import ButtonCancelSave from "../buttonCancelSave/ButtonCancelSave";
import InputTextComponent from "./inputText/InputTextComponent";
import QuillComponent from "./quill/QuillComponent";
import { useTextEditorContext } from "./hooks/useTextEditorContext";
const TextEditor = () => {
  const { title } = useTextEditorContext();
  console.log(title, "using the usecontext");
  return (
    <>
      <InputTextComponent />
      <QuillComponent />
      <ButtonCancelSave />
    </>
  );
};

export default TextEditor;
