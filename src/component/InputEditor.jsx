import Editor from "@monaco-editor/react";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

function CodeEditor() {
  const { input, setInput } = useContext(NoteContext);
  const handleInput = (e) => {
    setInput(e);
  };
  return (
    <div className="InputEditor">
      <div style={{ textAlign: "center" }}>
        <h3>Input</h3>
      </div>
      <Editor
        height="30vh"
        theme="vs-dark"
        defaultLanguage="plaintext"
        value={input}
        onChange={handleInput}
      />
      ;
    </div>
  );
}

export default CodeEditor;
