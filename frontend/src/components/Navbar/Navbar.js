import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
    <nav className="nav-container">
      <ul>
        <li className="logo">
          <NavLink to="/">AlphaDev</NavLink>
        </li>
        <li className="login">
          <NavLink to="/">Login/SignUp</NavLink>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default Navbar
