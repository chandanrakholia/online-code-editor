import Editor from "@monaco-editor/react";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

function CodeEditor() {
  const { code, setCode, selectedLanguage, fontSize } = useContext(NoteContext);
  return (
    <div className="CodeEditor">
      <Editor
        height="90vh"
        theme="vs-dark"
        defaultLanguage={selectedLanguage.languageEditor}
        language={selectedLanguage.languageEditor}
        defaultValue={selectedLanguage.boilerPlateCode}
        value={code}
        onChange={(e) => setCode(e)}
        options={{
          fontSize: fontSize,
        }}
      />
    </div>
  );
}

export default CodeEditor;
