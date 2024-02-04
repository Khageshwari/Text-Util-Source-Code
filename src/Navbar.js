import React from 'react'
import "./Navbar.css"
import {Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div id='nav'>
       <Link to="/"><h3>TextUtils</h3></Link>
        <Link to="/about"><h3>About Us</h3></Link>
    </div>
  )
}
