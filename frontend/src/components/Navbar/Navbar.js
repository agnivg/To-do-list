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
          <NavLink to="/">AlphaDev</NavLink>
          <a href=""></a>
        </li>
        <li className="login">
          <NavLink to="">Login / Signup</NavLink>
        </li>
      </ul>
    </nav>
    </div>
    </>
  );
}

export default Navbar
