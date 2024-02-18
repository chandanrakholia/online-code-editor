import Editor from "@monaco-editor/react";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

function CodeEditor() {
  const { output, fontSize } = useContext(NoteContext);

  const editorOptions = {
    readOnly: true,
  };
  return (
    <div className="OutputEditor">
      <div style={{ textAlign: "center" }}>
        <h3>Output</h3>
      </div>
      <Editor
        height="45vh"
        theme="vs-dark"
        defaultLanguage="plaintext"
        value={output}
        options={editorOptions}
      />
    </div>
  );
}

export default CodeEditor;
