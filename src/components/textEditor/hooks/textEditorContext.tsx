import { useState, createContext, SetStateAction, Dispatch } from "react";

interface tEContext {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  delta: any;
  setDelta: Dispatch<SetStateAction<any>>;
}

export const textEditorContext = createContext<tEContext>({
  title: "",
  setTitle: () => {},
  delta: "",
  setDelta: () => {},
});

const TextEditorContextProvider = ({ children }: any) => {
  const [title, setTitle] = useState<string>("oof");
  const [delta, setDelta] = useState("");

  return (
    <textEditorContext.Provider
      value={{
        title,
        setTitle,
        delta,
        setDelta,
      }}
    >
      {children}
    </textEditorContext.Provider>
  );
};

export default TextEditorContextProvider;
