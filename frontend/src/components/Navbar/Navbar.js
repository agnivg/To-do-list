import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
    <div className="Navbar">
    <nav className="nav-container">
      <ul>
        <li className="logo">
          <a href=""><img class="home" src="/assets/icons8-home-page-material-rounded/icons8-home-page-24.png" alt=""/></a>
        </li>
        <li className="login">
          <a href="">Login / Signup</a>
        </li>
      </ul>
    </nav>
    </div>
    </>
  );
}

export default Navbar
