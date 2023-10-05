import Editor from '@monaco-editor/react';
function CodeEditor() {
  return (
    <div className='CodeEditor'>
      <Editor height="90vh" theme="vs-dark" defaultLanguage="javascript" defaultValue="// some comment" />;
    </div>
  )
}

export default CodeEditor