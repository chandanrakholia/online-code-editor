import Editor from '@monaco-editor/react';
import NoteContext from "../context/NoteContext";
import { useContext } from 'react';
function CodeEditor() {
  const { code, setCode} = useContext( NoteContext );
  return (
    <div className='OutputEditor'>
      <Editor height="50vh" theme="vs-dark" defaultLanguage="plaintext" defaultValue="// some comment" value={code}/>;
    </div>
  )
}

export default CodeEditor