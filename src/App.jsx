import "bootstrap/dist/css/bootstrap.min.css";
import {useState, useEffect} from "react";
import "./style.css";
import { Editor } from "@monaco-editor/react";
import "./App.css"
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const editorOptions = {
  scrollBeyondLastLine: false,
  fontSize: "16px",
  folding: false,
  lineDecorationsWidth: 15,
};

const inputOptions = {
  minimap: { enabled: false },
  automaticLayout: true,
  scrollBeyondLastLine: false,
  fontSize: "14px",
  lineDecorationsWidth: 5,
};
const outputOptions = {
  minimap: { enabled: false },
  automaticLayout: true,
  scrollBeyondLastLine: false,
  fontSize: "14px",
  lineDecorationsWidth: 5,
  readOnly: true,
};
function App() {
  const language = [
    {
      id: 45,
      name: "Assembly (NASM 2.14.02)",
      editorLanguage: "assembly",
    },
    {
      id: 46,
      name: "Bash (5.0.0)",
      editorLanguage: "bash",
    },
    {
      id: 47,
      name: "Basic (FBC 1.07.1)",
      editorLanguage: "basic",
    },
    {
      id: 75,
      name: "C (Clang 7.0.1)",
      editorLanguage: "c",
      boilerPlateCode:
        `#include <stdio.h>\n\n\tint main(){\n\t\tprintf("Welcome to CR editor");\n\t\treturn 0;\n}`

    },
    {
      id: 76,
      name: "C++ (Clang 7.0.1)",
      editorLanguage: "c++",
      boilerPlateCode:
        `#include <iostream>\nusing namespace std;\n\n\tint main(){\n\t\tcout << "Hello World!";\n\t\treturn 0;\n}`
    },
    {
      id: 48,
      name: "C (GCC 7.4.0)",
      editorLanguage: "c",
      boilerPlateCode:
        `#include <stdio.h>\n\n\tint main(){\n\t\tprintf("Welcome to CR editor");\n\t\treturn 0;\n}`
    },
    {
      id: 52,
      name: "C++ (GCC 7.4.0)",
      editorLanguage: "c++",
      boilerPlateCode:
        `#include <iostream>\nusing namespace std;\n\n\tint main(){\n\t\tcout << "Hello World!";\n\t\treturn 0;\n}`

    },
    {
      id: 49,
      name: "C (GCC 8.3.0)",
      editorLanguage: "c",
      boilerPlateCode:
        `#include <stdio.h>\n\n\tint main(){\n\t\tprintf("Welcome to CR editor");\n\t\treturn 0;\n}`
    },
    {
      id: 53,
      name: "C++ (GCC 8.3.0)",
      editorLanguage: "c++",
      boilerPlateCode:
        `#include <iostream>\nusing namespace std;\n\n\tint main(){\n\t\tcout << "Hello World!";\n\t\treturn 0;\n}`

    },
    {
      id: 50,
      name: "C (GCC 9.2.0)",
      editorLanguage: "c",
      boilerPlateCode:
        `#include <stdio.h>\n\n\tint main(){\n\t\tprintf("Welcome to CR editor");\n\t\treturn 0;\n}`
    },
    {
      id: 54,
      name: "C++ (GCC 9.2.0)",
      editorLanguage: "c++",
      boilerPlateCode:
        `#include <iostream>\nusing namespace std;\n\n\tint main(){\n\t\tcout << "Hello World!";\n\t\treturn 0;\n}`

    },
    {
      id: 86,
      name: "Clojure (1.10.1)",
      editorLanguage: "clojure",
    },
    {
      id: 51,
      name: "C# (Mono 6.6.0.161)",
      editorLanguage: "c#",
    },
    {
      id: 77,
      name: "COBOL (GnuCOBOL 2.2)",
      editorLanguage: "cobol",
    },
    {
      id: 55,
      name: "Common Lisp (SBCL 2.0.0)",
      editorLanguage: "common-lisp",
    },
    {
      id: 90,
      name: "Dart (2.19.2)",
      editorLanguage: "dart",
    },
    {
      id: 56,
      name: "D (DMD 2.089.1)",
      editorLanguage: "d",
    },
    {
      id: 57,
      name: "Elixir (1.9.4)",
      editorLanguage: "elixir",
    },
    {
      id: 58,
      name: "Erlang (OTP 22.2)",
      editorLanguage: "plaintext",
    },
    {
      id: 44,
      name: "Executable",
      editorLanguage: "plaintext",
    },
    {
      id: 87,
      name: "F# (.NET Core SDK 3.1.202)",
      editorLanguage: "f#",
    },
    {
      id: 59,
      name: "Fortran (GFortran 9.2.0)",
      editorLanguage: "fortran",
    },
    {
      id: 60,
      name: "Go (1.13.5)",
      editorLanguage: "go",
    },
    {
      id: 95,
      name: "Go (1.18.5)",
      editorLanguage: "go",
    },
    {
      id: 88,
      name: "Groovy (3.0.3)",
      editorLanguage: "groovy",
    },
    {
      id: 61,
      name: "Haskell (GHC 8.8.1)",
      editorLanguage: "haskell",
    },
    {
      id: 91,
      name: "Java (JDK 17.0.6)",
      editorLanguage: "java",
    },
    {
      id: 62,
      name: "Java (OpenJDK 13.0.1)",
      editorLanguage: "java",
    },
    {
      id: 63,
      name: "JavaScript (Node.js 12.14.0)",
      editorLanguage: "javascript",
    },
    {
      id: 93,
      name: "JavaScript (Node.js 18.15.0)",
      editorLanguage: "javascript",
    },
    {
      id: 78,
      name: "Kotlin (1.3.70)",
      editorLanguage: "kotlin",
    },
    {
      id: 64,
      name: "Lua (5.3.5)",
      editorLanguage: "lua",
    },
    {
      id: 89,
      name: "Multi-file program",
      editorLanguage: "typeScript",
    },
    {
      id: 79,
      name: "Objective-C (Clang 7.0.1)",
      editorLanguage: "objective-c",
    },
    {
      id: 65,
      name: "OCaml (4.09.0)",
      editorLanguage: "ocaml",
    },
    {
      id: 66,
      name: "Octave (5.1.0)",
      editorLanguage: "octave",
    },
    {
      id: 67,
      name: "Pascal (FPC 3.0.4)",
      editorLanguage: "pascal",
    },
    {
      id: 85,
      name: "Perl (5.28.1)",
      editorLanguage: "perl",
    },
    {
      id: 68,
      name: "PHP (7.4.1)",
      editorLanguage: "php",
    },
    {
      id: 43,
      name: "Plain Text",
      editorLanguage: "plaintext",
      boilerPlateCode: '//Welcome to CR editor")',

    },
    {
      id: 69,
      name: "Prolog (GNU Prolog 1.4.5)",
      editorLanguage: "prolog",
    },
    {
      id: 70,
      name: "Python (2.7.17)",
      editorLanguage: "python",
      boilerPlateCode: 'print("Welcome to CR editor")',

    },
    {
      id: 92,
      name: "Python (3.11.2)",
      editorLanguage: "python",
      boilerPlateCode: 'print("Welcome to CR editor")',

    },
    {
      id: 71,
      name: "Python (3.8.1)",
      editorLanguage: "python",
      boilerPlateCode: 'print("Welcome to CR editor")',
    },
    {
      id: 80,
      name: "R (4.0.0)",
      editorLanguage: "r",
    },
    {
      id: 72,
      name: "Ruby (2.7.0)",
      editorLanguage: "ruby",
    },
    {
      id: 73,
      name: "Rust (1.40.0)",
      editorLanguage: "rust",
    },
    {
      id: 81,
      name: "Scala (2.13.2)",
      editorLanguage: "scala",
    },
    {
      id: 82,
      name: "SQL (SQLite 3.27.2)",
      editorLanguage: "sql",
    },
    {
      id: 83,
      name: "Swift (5.2.3)",
      editorLanguage: "swift",
    },
    {
      id: 74,
      name: "TypeScript (3.7.4)",
      editorLanguage: "typeScript",
    },
    {
      id: 94,
      name: "TypeScript (5.0.3)",
      editorLanguage: "typeScript",
    },
    // {
    //   id: 84,
    //   name: "Visual Basic.Net (vbnc 0.0.0.5943)",
    //   editorLanguage: "typeScript",
    // },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState({
    languageId: language[43].id,
    languageName: language[43].name,
    languageEditor: language[43].editorLanguage,
    boilerPlateCode: language[43].boilerPlateCode
  });
  const [code, setCode] = useState(language[43].boilerPlateCode);
  const [input, setInput] = useState("// enter input here");
  const [output, setOutput] = useState("");
  const [editorMode, setEditorMode] = useState("vs-dark");
  const [outputDetails, setOutputDetails] = useState("");
  const [processing, setProcessing] = useState(null);
  const [submit, setSubmit] = useState(false);

  const toggleTheme = (idName) => {
    let currentClassName = document.getElementById(idName).className;
    let newClassName = currentClassName;
    if (currentClassName == idName + "-dark")
      newClassName = idName + "-light";
    else newClassName = idName + "-dark";
    document.getElementById(idName).className = newClassName;
  };

  const handleThemeChange = () => {
    if (editorMode === "vs-light") setEditorMode("vs-dark");
    else setEditorMode("vs-light");
    toggleTheme("App");
    toggleTheme("header");
    toggleTheme("app-name");
    toggleTheme("language-button");
    const themeToggler = document.getElementById("theme-icon");
    let classNames = themeToggler.classList;
    if (classNames.contains("theme-icon-light")) {
      classNames.replace("theme-icon-light", "theme-icon-dark");
      classNames.replace("fa-sun", "fa-moon");
    } else {
      classNames.replace("theme-icon-dark", "theme-icon-light");
      classNames.replace("fa-moon", "fa-sun");
    }
  };
  const handleLanguageSelect = (selectedLanguage) => {
    console.log(selectedLanguage);
    setCode(selectedLanguage.boilerPlateCode)
    setSelectedLanguage({
      languageId: selectedLanguage.id,
      languageName: selectedLanguage.name,
      languageEditor: selectedLanguage.editorLanguage,
      boilerPlateCode: selectedLanguage.boilerPlateCode
    });
  };
  const API_KEY = import.meta.env.VITE_API_KEY;
  const handleCompile = async () => {
    setProcessing(true);
    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: {
        base64_encoded: "true",
        fields: "*",
      },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      data: {
        language_id: selectedLanguage.languageId,
        source_code: btoa(code),
        stdin: btoa(input),
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(options)
        console.log("api called1");
        console.log(response);
        const token = response.data.token;
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
      })
      .catch((err) => {
        console.log(options);

        let error = err.response ? err.response.data : err;

        let status = err.response.status;
        console.log("status", status);
        if (status === 429) {
          console.log("too many requests", status);
          showErrorToast(
            `Quota of 100 requests exceeded for the Day!`,
            10000
          );
        }
        console.log("catch block...", error);
        setProcessing(false);
        setOutput(err.message);
      });
  };
  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: "https://judge0-ce.p.rapidapi.com/submissions" + "/" + token,
      params: {
        base64_encoded: "true",
        fields: "*",
      },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log("api called2");
      console.log(response);

      const statusId = response.data.status?.id;
      console.log(statusId)
      if (statusId === 1 || statusId === 2) {
        setTimeout(() => {
          checkStatus(token);
        }, 3000);
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        showSuccessToast(`Compiled Successfully!`);

      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      showErrorToast();

    }
  };
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;
    if (statusId === 6) {
      return setOutput(atob(outputDetails?.compile_output));
    } else if (statusId === 3) {
      return setOutput(atob(outputDetails.stdout));
    } else if (statusId === 5) {
      return setOutput("Time Limit Exceeded");
    } else {
      return setOutput(atob(outputDetails?.stderr));
    }
  };
  useEffect(() => {
    if (outputDetails !== "") {
      console.log("outputDetails1", outputDetails);
      getOutput();
      setSubmit(false);
    } else {
      console.log("outputDetails2", outputDetails);
      // handleCompile();
    }
  }, [outputDetails]);
  useEffect(() => {
    if (submit == true) {
      if (outputDetails !== "") {
        console.log("outputDetails1", outputDetails);
        getOutput();
        setSubmit(false);
      } else {
        console.log("outputDetails2", outputDetails);
        setSubmit(false);
        handleCompile();
      }
    }
  }, [submit]);
  const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showErrorToast = (msg, timer) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: "top-right",
      autoClose: timer ? timer : 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div id="App" className="App-dark">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div id="header" className="header-dark">
        <h3 id="app-name" className="app-name-dark">
          <i className="fas fa-solid fa-cube" aria-hidden="true"></i>
          &nbsp; CR editor
        </h3>

        <div className="nav-right-options">
          <button className=" btn run-btn theme-btn" onClick={handleThemeChange}>
            <FaStar />
            &nbsp; Theme
          </button>
        </div>
      </div>

      <div className="secondary-nav-items">
        <button className="btn run-btn" onClick={handleCompile}>
          <i
            className="fas fa-play fa-fade run-icon"
            aria-hidden="true"
          ></i>
          <FaRegPlayCircle />
          &nbsp; {processing ? "Processing..." : "Run Code"}
        </button>

        <button id="language-button" className="language-button-dark">
          <select defaultValue={43} onChange={(e) => handleLanguageSelect(language[e.target.value])}>
            {language.map((lang, index) => (
              <option key={lang.id} value={index}>
                {lang.name}
              </option>
            ))}
          </select>
        </button>
      </div>

      <div className="editor">
        <Editor
          height="100%"
          width="100%"
          theme={editorMode}
          defaultLanguage={language}
          defaultValue={code}
          value={code}
          onChange={(e) => setCode(e)}
          options={editorOptions}
          language={selectedLanguage.languageEditor}
        />
      </div>
      <div className="std-input-output">
        <div className="std-input">
          <Editor
            height="100%"
            width="100%"
            theme={editorMode}
            defaultLanguage="plaintext"
            defaultValue={"// enter input here"}
            value={input}
            options={inputOptions}
            onChange={(e) => setInput(e)}
          />
        </div>
        <div className="std-output">
          <Editor
            height="100%"
            width="100%"
            theme={editorMode}
            defaultLanguage="plaintext"
            defaultValue={"// output"}
            value={output}
            options={outputOptions}
          />
        </div>
      </div>
      <br />
    </div>
  );
}

export default App;
