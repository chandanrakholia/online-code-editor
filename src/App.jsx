import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import CodeEditor from "./component/CodeEditor";
import InputEditor from "./component/InputEditor";
import OutputEditor from "./component/OutputEditor";
import "./style.css";
function App() {
  return (
    <div>
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
