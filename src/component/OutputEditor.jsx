import Editor from "@monaco-editor/react";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

function CodeEditor() {
  const { output } = useContext(NoteContext);

  const editorOptions = {
    readOnly: true,
  };

  return (
    <div className="OutputEditor">
      <Editor
        height="50vh"
        theme="vs-dark"
        defaultLanguage="plaintext"
        value={output}
        options={editorOptions}
      />
    </div>
  );
}

export default CodeEditor;
