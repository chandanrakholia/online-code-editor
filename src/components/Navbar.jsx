import React from 'react'
import "../App.css"
import { FaStar } from "react-icons/fa";


function Navbar() {
  return (
    <div id="header" className="header-dark">
      <h3 id="app-name" className="app-name-dark">
        <i className="fas fa-solid fa-cube" aria-hidden="true"></i>
        &nbsp; CR editor
      </h3>

      <div className="nav-right-options">
        <button className=" btn run-btn theme-btn"/* onClick={handleThemeChange}*/>
          <FaStar />
          &nbsp; Theme
        </button>
      </div>
    </div>
  )
}

export default Navbar