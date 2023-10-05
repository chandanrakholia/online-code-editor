import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import CodeEditor from "./component/CodeEditor";
import InputEditor from "./component/InputEditor";
import OutputEditor from "./component/OutputEditor";
import "./style.css";
import NoteState from "./context/NoteState";

function App() {
  return (
    <div>
      <NoteState>
        <Navbar />
        <CodeEditor />
        <div className="float">
          <InputEditor />
          <OutputEditor />
        </div>
      </NoteState>
    </div>
  );
}

export default App;
