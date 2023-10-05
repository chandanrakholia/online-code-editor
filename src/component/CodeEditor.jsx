import Editor from "@monaco-editor/react";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

function CodeEditor() {
  const { code, setCode} = useContext( NoteContext );

  return (
    <div className="CodeEditor">
      <Editor
        height="90vh"
        theme="vs-dark"
        defaultLanguage="python"
        defaultValue=""
        value={code}
        onChange={(e) => setCode(e)}
      />
    </div>
  );
}

export default CodeEditor;
