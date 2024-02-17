import React from 'react'
import home from "../Assets/home.jpg"
import Navbar from "./Navbar"
import NoteContext from "../context/NoteContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css"
import { Link } from 'react-router-dom';
function Home() {
  const routeChange=()=>{
    let path = `./editor`; 
    navigate(path);
  }
  return (
    <>
      <div className='float-container'>
        <div>
          <img src={home} alt="" className='float-child1' />
        </div>
        <div className='float-child2'>
          <button type="button" className="btn btn-primary btn-lg get-started"
          onClick={routeChange}>Get started</button>
        </div>
      </div>
    </>
  )
}

export default Home