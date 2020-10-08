import React from "react";
import { Link } from 'react-router-dom';
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
export default function Navbar() {
  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <Link to="/">International</Link>
        <Link to="/corona">coronavirus</Link>
        <Link to="/newzealand">NewZealand</Link>
        <Link to="/australia"> Australia</Link>
        <Link to="/business">Business</Link>
        <Link to="/science">Science</Link>
        <Link to="/health"> Health</Link>
        <Link to="/tech">Technology</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/fashion">Fashion</Link>
        <Link to="/retail">Retail</Link>
        <Link to="/politics">Politics</Link>
        <Link to="/automobile">Automobile</Link>
        <Link to="/education">Education</Link>
        <Link to="/startup">Startup</Link>
      </div>
      <div className="header">
        <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
          &#9776;
        </span>
      </div>
    </div>
  );
}