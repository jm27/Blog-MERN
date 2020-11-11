import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
    <Link className="navbar-brand" to="/">
      JE Blog
      <i id="spin" class="fa fa-cog fa-spin fa-2x fa-fw" aria-hidden="true"></i>
    </Link>{" "}
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav  mt-2 mt-lg-0 w-100 justify-content-end">
        <li className="nav-item">
          <Link className="nav-link text-light" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/articles-list">
            Articles-List
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
