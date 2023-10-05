import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NoteState from "./context/NoteState";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NoteState>
    <App />
    </NoteState>
  </React.StrictMode>,
)
