import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useTextEditorContext } from "../hooks/useTextEditorContext";

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
  const { delta, setDelta, htmlData, setHtmlData } = useTextEditorContext();

  const onEditorChange = (
    value: string,
    delta: any,
    source: string,
    editor: any
  ) => {
    // console.log({ value, delta, source, editor });
    // console.log(editor.getContents());
    // console.log(editor.getHTML());
    setDelta(editor.getContents());
    setHtmlData(editor.getHTML());
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
    <div className="card mb-5">
      <ReactQuill
        theme="snow"
        value={delta}
        //   value={parsed} --> passing parsed delta object to set editor with data
        //   onChange={setValue}
        modules={modules}
        formats={formats}
        onChange={(value, delta, source, editor) =>
          onEditorChange(value, delta, source, editor)
        }
      />
    </div>
  );
};

export default QuillComponent;
