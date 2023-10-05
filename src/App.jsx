import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import CodeEditor from "./component/CodeEditor";
import InputEditor from "./component/InputEditor";
import OutputEditor from "./component/OutputEditor";
import "./style.css";
import Runner from "./component/Runner";
import { useContext } from "react";
import NoteContext from "./context/NoteContext";
function App() {
  const { submit } = useContext( NoteContext );

  return (
    <div>
        {submit === true ? <Runner /> : null}
        <Navbar />
        <CodeEditor />
        <div className="float">
          <InputEditor />
          <OutputEditor />
        </div>
        <Runner />
    </div>
  );
}

export default App;
