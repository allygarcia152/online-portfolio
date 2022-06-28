import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="d-flex flex-row px-1 bg-header border-bottom border-dark">
      <h2 className="pt-2 px-2 m-0">
        <Link className="name-logo" to="/">
          &lt;AllyG&#47;&gt;
        </Link>
      </h2>
      <nav>
        <ul className="d-flex flex-row justify-content-start list-unstyled m-0">
          <li className="mx-2 pt-2 px-2">
            <Link className="nav-links" to="/about">
              About me
            </Link>
          </li>
          <li className="mx-2 pt-2 px-2">
            <Link className="nav-links" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="mx-2 pt-2 px-2">
            <Link className="nav-links" to="/contact">
              Contact
            </Link>
          </li>
          <li className="mx-2 pt-2 px-2">
            <Link className="nav-links" to="/resume">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
