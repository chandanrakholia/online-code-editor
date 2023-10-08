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
  const { setSubmit,output,submit } = useContext( NoteContext );
  return (
    <div>
        {submit === true ? <Runner /> : null}
        {/* {submit === true ? console.log("check") : console.log("nullnull")} */}
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
