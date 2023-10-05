import {useState,} from 'react'
import NoteContext from "./NoteContext"
import PropTypes from 'prop-types';
const NoteState=({children})=>{
    const[code,setCode]=useState("");
    const[selectedLanguage,setSelectedLanguage]=useState("");
    const[submit,setSubmit]=useState(false);
    const[output,setOutput]=useState("")
  return (
    <NoteContext.Provider value={{code,setCode,selectedLanguage,setSelectedLanguage,submit,setSubmit,output,setOutput}}>
    {children}
    </NoteContext.Provider>
  );
}
NoteState.propTypes = {
  children: PropTypes.node.isRequired,
  };
export default NoteState