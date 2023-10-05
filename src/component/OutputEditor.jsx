import Editor from '@monaco-editor/react';
import { useContext } from 'react';
import NoteContext from "../context/NoteContext";
function CodeEditor() {
  const {output}=useContext(NoteContext);
  return (
    <div className='OutputEditor'>
      <Editor height="50vh" theme="vs-dark" defaultLanguage="plaintext" defaultValue="// some comment" value={output}/>;
    </div>
  )
}

export default CodeEditor