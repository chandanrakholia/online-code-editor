import axios from "axios";
import { useContext, useState, useEffect } from "react";
import NoteContext from "../context/NoteContext";
function Runner() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { setOutput, setSubmit, selectedLanguage, code, input } =
    useContext(NoteContext);
  const [outputDetails, setOutputDetails] = useState("");
  const handleCompile = () => {
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
        }
        console.log("catch block...", error);
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

      if (statusId === 1 || statusId === 2) {
        setTimeout(() => {
          checkStatus(token);
        }, 3000);
      } else {
        setOutputDetails(response.data);
      }
    } catch (err) {
      console.log("err", err);
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
      handleCompile();
    }
  }, [outputDetails]);
  return (
    <div>
      {/* <div className="bg-[#1E293B] w-full h-[300px] rounded-lg text-white p-3 text-xl overflow-y-auto mb-7"> */}
      {/* {outputDetails ? getOutput() : null} */}
      {/* {outputDetails==="" ? handleCompile(): null} */}
      {/* </div> */}
    </div>
  );
}

export default Runner;
