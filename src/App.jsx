import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import CodeEditor from "./component/CodeEditor";
import InputEditor from "./component/InputEditor";
import OutputEditor from "./component/OutputEditor";
import Runner from "./component/Runner";
import { useContext } from "react";
import NoteContext from "./context/NoteContext";
import Home from "./component/Home"
import "./style.css";
import { NavbarBrand } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Editor } from "@monaco-editor/react";
function App() {
  const { setSubmit, output, submit, home } = useContext(NoteContext);
  return (
    <div>
      { submit==true? <Runner/> : null}
      <Navbar />
      <CodeEditor />
      <div className="float">
        <InputEditor />
        <OutputEditor />
      </div>
    </div>
  );
}

export default App;
