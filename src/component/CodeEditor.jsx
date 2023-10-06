import Editor from "@monaco-editor/react";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

function CodeEditor() {
  const { code, setCode,selectedLanguage} = useContext( NoteContext );
  return (
    <div className="CodeEditor">
      <Editor
        height="90vh"
        theme="vs-dark"
        defaultLanguage={selectedLanguage}
        defaultValue="some comments"
        value={code}
        onChange={(e) => setCode(e)}
      />
    </div>
  );
}

export default CodeEditor;
