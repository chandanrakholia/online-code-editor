import axios from "axios";
import { useContext, useState } from "react";
import NoteContext from "../context/NoteContext";
function Runner() {
  const key = "0418749d94msh3a716c84f043ce5p1a34edjsn9ac3edc40b93";
  const { setOutput, submit, selectedLanguage, code } = useContext(NoteContext);
  const [outputDetails, setOutputDetails] = useState();
  const handleCompile = () => {
    const formData = {
      language_id: selectedLanguage?.id || 63,
      source_code: btoa(code),
    };
    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        const token = response.data.token;
        checkStatus(token);
        console.log(response);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;

        let status = err.response.status;
        console.log("status", status);
        if (status === 429) {
          console.log("too many requests", status);
        }
        console.log("catch block...", error);
        console.log("hello world")
        setOutput(err.message);
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: "https://judge0-ce.p.rapidapi.com/submissions" + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      if (statusId === 1 || statusId === 2) {
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setOutputDetails(response.data);

        return;
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      return setOutput(atob(outputDetails?.compile_output));
      // <pre className="px-2 py-1 font-normal text-xl text-red-500">
      //   {atob(outputDetails?.compile_output)}
      // </pre>
    } else if (statusId === 3) {
      return setOutput(atob(outputDetails.stdout));
      // <pre className="px-2 py-1 font-normal text-xl text-green-500">
      //   {atob(outputDetails.stdout) !== null
      //     ? `${atob(outputDetails.stdout)}`
      //     : null}
      // </pre>
    } else if (statusId === 5) {
      return setOutput("Time Limit Exceeded");
      // <pre className="px-2 py-1 font-normal text-xl text-red-500">
      //   {`Time Limit Exceeded`}
      // </pre>
    } else {
      return setOutput(atob(outputDetails?.stderr));
      // <pre className="px-2 py-1 font-normal text-xl text-red-500">
      //   {atob(outputDetails?.stderr)}
      // </pre>
    }
  };

  return (
    <div>
      {/* <div className="bg-[#1E293B] w-full h-[300px] rounded-lg text-white p-3 text-xl overflow-y-auto mb-7"> */}
      {outputDetails ? <>{getOutput()}</> : null}
      {submit ? <>{handleCompile()}</> : null}
      {/* </div> */}
      {/* <button onClick={handleCompile}>Compile</button> */}
    </div>
  );
}

export default Runner;
