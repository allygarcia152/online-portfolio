import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="flex flex-wrap pt-1 md:pt-2 border-bottom bg-mint text-2xl md:text-3xl">
      <h2 className="self-center mx-2 my-0 md:mt-1 text-mellow hover:text-deep">
        <Link className="name-logo" to="/">
          &lt;AllyG&#47;&gt;
        </Link>
      </h2>
      <ul className="hidden md:inline-flex sm:mx-2 md:mx-0 md:my-0 md:mt-1 flex-wrap gap-x-7 list-none">
        <li className="self-center">
          <Link className="nav-links text-deep" to="/about">
            About me
          </Link>
        </li>
        <li className="self-center">
          <Link className="nav-links text-deep" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className="self-center">
          <Link className="nav-links text-deep" to="/contact">
            Contact
          </Link>
        </li>
        <li className="self-center">
          <Link className="nav-links text-deep" to="/resume">
            Resume
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
