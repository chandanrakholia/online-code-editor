import Editor from '@monaco-editor/react';
function CodeEditor() {
  return (
    <div className='OutputEditor'>
      <Editor height="50vh" theme="vs-dark" defaultLanguage="javascript" defaultValue="// some comment" />;
    </div>
  )
}

export default CodeEditor