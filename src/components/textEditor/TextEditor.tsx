import ButtonCancelSave from "../buttonCancelSave/ButtonCancelSave";
import InputTextComponent from "./inputText/InputTextComponent";
import QuillComponent from "./quill/QuillComponent";

const TextEditor = () => {
  return (
    <>
      <InputTextComponent />
      <QuillComponent />
      <ButtonCancelSave />
    </>
  );
};

export default TextEditor;
