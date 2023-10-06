import Editor from "@monaco-editor/react";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

function CodeEditor() {
  const {input,setInput}=useContext(NoteContext)
  return (
    <div className="InputEditor">
      <Editor
        height="30vh"
        theme="vs-dark"
        defaultLanguage="plaintext"
        value={input}
        onChange={(e)=>{setInput(e)}}
      />
      ;
    </div>
  );
}

export default CodeEditor;
