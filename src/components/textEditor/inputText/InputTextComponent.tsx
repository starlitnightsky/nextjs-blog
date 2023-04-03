import React, { useState } from "react";
import { useTextEditorContext } from "../hooks/useTextEditorContext";
const InputTextComponent = () => {
  const { title, setTitle, description, setDescription } =
    useTextEditorContext();
  return (
    <>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="ya ?"
      />

      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="ya ?"
      />
    </>
  );
};

export default InputTextComponent;
