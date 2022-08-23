import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-container">
        <Link to="/">
          <li className="navbar-logo">
            <i className="ri-movie-2-fill"></i>
            <span>The Movie App</span>
          </li>
        </Link>
        <li className="nav-searchbar">
          <Searchbar />
        </li>
      </ul>
    </nav>
  );
}
