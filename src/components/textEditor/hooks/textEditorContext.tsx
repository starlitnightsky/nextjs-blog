import { useState, createContext, SetStateAction, Dispatch } from "react";

interface ITextEditorContext {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  delta: any;
  setDelta: Dispatch<SetStateAction<any>>;
  htmlData: string;
  setHtmlData: Dispatch<SetStateAction<string>>;
}

export const textEditorContext = createContext<ITextEditorContext>({
  title: "",
  setTitle: () => {},
  description: "",
  setDescription: () => {},
  delta: "",
  setDelta: () => {},
  htmlData: "",
  setHtmlData: () => {},
});

const TextEditorContextProvider = ({ children }: any) => {
  const [title, setTitle] = useState<string>("oof");
  const [description, setDescription] = useState<string>("des");
  const [delta, setDelta] = useState("");
  const [htmlData, setHtmlData] = useState<string>("");

  return (
    <textEditorContext.Provider
      value={{
        title,
        setTitle,
        delta,
        setDelta,
        htmlData,
        setHtmlData,
        description,
        setDescription,
      }}
    >
      {children}
    </textEditorContext.Provider>
  );
};

export default TextEditorContextProvider;
