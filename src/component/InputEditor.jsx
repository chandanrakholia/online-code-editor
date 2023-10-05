import Editor from '@monaco-editor/react';
function CodeEditor() {
  return (
    <div className='InputEditor'>
      <Editor height="30vh" theme="vs-dark" defaultLanguage="plaintext" defaultValue="// some comment" />;
    </div>
  )
}

export default CodeEditor