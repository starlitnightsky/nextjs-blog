import React, { useState } from "react";
import { useTextEditorContext } from "../hooks/useTextEditorContext";
const InputTextComponent = () => {
  const { title, setTitle } = useTextEditorContext();
  return (
    <>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="ya ?"
      />
    </>
  );
};

export default InputTextComponent;
