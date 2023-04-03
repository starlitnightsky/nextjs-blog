import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];



const QuillComponent = () => {
  const [deltaValue, setDeltaValue] = useState("");
  const [htmlValue, setHtmlValue] = useState("");

  const onEditorChange = (
    value: string,
    delta: any,
    source: string,
    editor: any
  ) => {
    console.log({ value, delta, source, editor });
    console.log(editor.getContents());
    console.log(editor.getHTML());
    setDeltaValue(editor.getContents());
    setHtmlValue(editor.getHTML());
  };

  /**
   *  sample json stringyfied delta object
   */
  const stringify = JSON.stringify({
    ops: [
      {
        attributes: {
          bold: true,
        },
        insert: "gadgadgb ghdgjb ",
      },
      {
        attributes: {
          header: 1,
        },
        insert: "\n",
      },
    ],
  });

  /**
   * sample parsed delta json
   * set this variable to "value" prop in ReactQuill component to fill editor with data
   */
  const parsed = JSON.parse(stringify);

  return (
    <ReactQuill
      theme="snow"
      value={deltaValue}
      //   value={parsed} --> passing parsed delta object to set editor with data
      //   onChange={setValue}
      modules={modules}
      formats={formats}
      onChange={(value, delta, source, editor) =>
        onEditorChange(value, delta, source, editor)
      }
    />
  );
};

export default QuillComponent;
