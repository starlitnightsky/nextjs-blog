import React, { useState } from "react";
import { useTextEditorContext } from "../hooks/useTextEditorContext";
const InputTextComponent = () => {
  const { title, setTitle, description, setDescription } =
    useTextEditorContext();
  return (
    <div className="card pt-5 pb-5 pe-md-5 px-md-5 mb-5">
      <label htmlFor="title">Add Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="post title"
        required
      />
      <br />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="summary/description"
        required
      />
    </div>
  );
};

export default InputTextComponent;
