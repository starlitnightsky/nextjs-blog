import ButtonCancelSave from "../buttonCancelSave/ButtonCancelSave";
import InputTextComponent from "./inputText/InputTextComponent";
import QuillComponent from "./quill/QuillComponent";
import { useTextEditorContext } from "./hooks/useTextEditorContext";
import { useEffect } from "react";
import ButtonCancelUpdate from "../buttonCancelUpdate/ButtonCancelUpdate";

const EditTextEditor = ({ parsedFullBlogPostData }: any) => {
  const { title, htmlData, setDelta, setTitle, setDescription, setHtmlData } =
    useTextEditorContext();
  // console.log(parsedFullBlogPostData, "editor");
  // console.log(title, "using the usecontext");
  useEffect(() => {
    if (!htmlData) return;
    // console.log(htmlData);
    console.log(htmlData, "rerender");
    console.log(parsedFullBlogPostData, "editor");
  }, []);

  useEffect(() => {
    if (
      typeof parsedFullBlogPostData?.bodyHTML !== "undefined" ||
      typeof parsedFullBlogPostData?.title !== "undefined" ||
      typeof parsedFullBlogPostData?.description !== "undefined"
    ) {
      setDelta(parsedFullBlogPostData?.bodyHTML);
      setHtmlData(parsedFullBlogPostData?.bodyHTML);

      setTitle(parsedFullBlogPostData?.title);
      setDescription(parsedFullBlogPostData?.description);
    }
  }, [parsedFullBlogPostData]);

  return (
    <div className="login-form-bg  pt-5 pb-5 pe-md-5 px-md-5 mb-5">
      <div className="texteditor-form">
        <InputTextComponent />
        <QuillComponent />
        <ButtonCancelUpdate />
      </div>
    </div>
  );
};

export default EditTextEditor;
