import { useContext } from "react";

import { textEditorContext } from "./textEditorContext";

export const useTextEditorContext = () => {
  const context = useContext(textEditorContext);

  return context;
};
