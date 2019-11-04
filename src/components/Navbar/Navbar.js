import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h3>
        OTO <span>App</span>
      </h3>
      <ul className="nav-links">
        <li>
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link active " to="/about">
            Help
          </Link>
        </li>
      </ul>
    </nav>
  );
}
