import React, { useState } from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar" >
        <div className="toggleButton">
          
        </div>
        <div className="links">
        <Link to="/"><h3> Home </h3></Link>
        <Link to="/experience"><h3> Roadmap</h3></Link>
        <Link to="/projects"> <h3>Projects</h3> </Link>
        <Link to="/school"><h3> school </h3></Link>
        </div>
    </div>
  )
}

export default Navbar
