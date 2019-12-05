import React from "react";
import {Link} from 'react-router-dom'
import KBLOGO from '../assets/images/kb7.png'
import "../assets/css/navbar.css";

const NavBar = () => {
  return (
    <React.Fragment>
    
    <nav> 
    <img id="logo" src={KBLOGO} alt="logo" />
      <ul className="nav-links">
      
        <Link className="nav-links1" to="/">Home</Link>
        <Link className="nav-links2" to="/media">Media</Link>
        <Link className="nav-links3" to="/store">Store</Link>
        <Link className="nav-links4" to="/about">About</Link>
        {/* <Link className="nav-links5" to="/ineedjesus">Need Jesus?</Link> */}
        <Link className="nav-links6" to="/contact">Contact</Link>
        
      </ul>
     
    </nav>
    </React.Fragment>
  );
};

export default NavBar;