import React from 'react';
import logo from "../logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (
<nav class="navbar navbar-dark bg-dark navbar-expand-md">
  <div className=" container">
    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt =''/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style= {{color:"white"}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item  ">
          <a className="nav-link active " aria-current="page" href="#">Home</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">about me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">how work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">contacts</a>
        </li>
        
    
      </ul>
      
  </div>
  </div>
</nav>
    )
}

export default Navbar
