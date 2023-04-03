import QuillComponent from "../quill/QuillComponent";
import InputTextComponent from "../inputText/InputTextComponent";
import ButtonCancelSave from "../buttonCancelSave/ButtonCancelSave";

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
