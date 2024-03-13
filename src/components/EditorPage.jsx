import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useRef } from "react";
import "../style.css";
// import { Editor } from "@monaco-editor/react";
import "../App.css"
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Client from "./Client"
import ACTIONS from '../../Actions';
import { initSocket } from '../../socket';
import {
  useLocation,
  useNavigate,
  Navigate,
  useParams,
} from 'react-router-dom';
import * as monaco from 'monaco-editor';
import language from "./Languages"
import MonacoEditor from '@monaco-editor/react';
import Editor from '../components/Editor';
import { Textarea } from "react-login-page";
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
  const socketRef = useRef(null);
  const codeRef = useRef(null);
  const location = useLocation();
  const { roomId } = useParams();
  const reactNavigator = useNavigate();
  const [clients, setClients] = useState([]);
  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.on('connect_error', (err) => handleErrors(err));
      socketRef.current.on('connect_failed', (err) => handleErrors(err));

      function handleErrors(e) {
        console.log('socket error', e);
        toast.error('Socket connection failed, try again later.');
        reactNavigator('/');
      }
      console.log("username is", location.state?.username)
      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username: location.state?.username,
      });

      // Listening for joined event
      socketRef.current.on(
        ACTIONS.JOINED,
        ({ clients, username, socketId }) => {
          if (username !== location.state?.username) {
            toast.success(`${username} joined the room.`);
            console.log(`${username} joined`);
          }
          setClients(clients);
          console.log(clients)
          socketRef.current.emit(ACTIONS.SYNC_CODE, {
            code: codeRef.current,
            socketId,
          });
        }
      );

      // Listening for disconnected
      socketRef.current.on(
        ACTIONS.DISCONNECTED,
        ({ socketId, username }) => {
          toast.success(`${username} left the room.`);
          setClients((prev) => {
            return prev.filter(
              (client) => client.socketId !== socketId
            );
          });
        }
      );
    };
    init();
    // return () => {
    //   socketRef.current.disconnect();
    //   socketRef.current.off(ACTIONS.JOINED);
    //   socketRef.current.off(ACTIONS.DISCONNECTED);
    // };
  }, []);


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
    console.log(codeRef.current)
    console.log(input)
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
        source_code: btoa(codeRef.current),
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

  const handleCodeChange = (e) => {
    console.log(e)
    setCode(e)
  }
  async function copyRoomId() {
    try {
      await navigator.clipboard.writeText(roomId);
      toast.success('Room ID has been copied to your clipboard');
    } catch (err) {
      toast.error('Could not copy the Room ID');
      console.error(err);
    }
  }
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
        pauseOnHover={false}
        theme="light"
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
          <button className="btn run-btn theme-btn" onClick={copyRoomId}>
            Copy ROOM ID
          </button>
        </div>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        {clients.map((client) => {
          console.log(client.userName);
          return <Client key={client.socketId} username={client.username}></Client>;
        })}
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
      <div className="editor" style={{ overflow: "hidden" }}>
        {/* <Editor
          height="100%"
          width="100%"
          theme={editorMode}
          defaultLanguage={language}
          // defaultValue={code}
          // value={code}
          onChange={handleCodeChange}
          onMount={handleEditorDidMount}
          options={editorOptions}
          language={selectedLanguage.languageEditor}
        /> */}
        <Editor
          socketRef={socketRef}
          roomId={roomId}
          onCodeChange={(code) => {
            console.log(code)
            codeRef.current = code;
          }}
        />
      </div>
      <div className="std-input-output">
        <div className="std-input">
          {/* <Editor
            height="100%"
            width="100%"
            theme={editorMode}
            defaultLanguage="plaintext"
            defaultValue={"// enter input here"}
            value={input}
            options={inputOptions}
            onChange={(e) => setInput(e)}
          /> */}
          {/* <EditorInput/> */}
          <textarea placeholder="enter input here" onChange={(e)=>setInput(e.target.value)}></textarea>
        </div>
        <div className="std-output">
          {/* <Editor
            height="100%"
            width="100%"
            theme={editorMode}
            defaultLanguage="plaintext"
            defaultValue={"// output"}
            value={output}
            options={outputOptions}
          /> */}
          <textarea placeholder="output" value={output}></textarea>
        </div>
      </div>
      <br />
    </div>
  );
}

export default App;
