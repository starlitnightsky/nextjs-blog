import React, { useState } from "react";
const InputTextComponent = () => {
  const [content, setContent] = useState("");
  return (
    <>
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="ya ?"
      />
    </>
  );
};

export default InputTextComponent;
