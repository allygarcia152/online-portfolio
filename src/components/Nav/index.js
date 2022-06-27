import React from "react";

function Nav() {
  return (
    <header className="d-flex flex-row px-1 bg-header border-bottom border-dark">
      <h2 className="pt-2 px-2 m-0">
        <a className="name-logo" href="/">
          &lt;AllyG&#47;&gt;
        </a>
      </h2>
      <nav>
        <ul className="d-flex flex-row justify-content-start list-unstyled m-0">
          <li className="mx-2 pt-2 px-2">
            <a className="nav-links" href="#about">About me</a>
          </li>
          <li className="mx-2 pt-2 px-2">
            <a className="nav-links" href="#portfolio">Portfolio</a>
          </li>
          <li className="mx-2 pt-2 px-2">
            <span className="nav-links">Contact</span>
          </li>
          <li className="mx-2 pt-2 px-2">
            <a className="nav-links" href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
