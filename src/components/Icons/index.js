import React from "react";
import { Link } from "react-router-dom";
import user from "../../assets/icons/users.png";
import portfolio from "../../assets/icons/folder-type.png";
import contact from "../../assets/icons/mail.png";
import resume from "../../assets/icons/note.png";

function Icons() {
  return (
    <section className="md:my-1 md:mx-3 flex md:flex-col sm:flex-row md:gap-y-2 md:gap-x-0 sm:justify-between md:content-start">
      <div className="justify-center">
        <Link to="/about">
          <img
            className="flex sm:h-11 md:h-20 max-h-28 max-w-14 grow-0"
            src={user}
            alt="pixelated icon of a person's head"
          ></img>
          <p className="text-dark md:text-base sm:text-sm">Learn-About-Me</p>
        </Link>
      </div>
      <div>
        <Link to="/portfolio">
          <img
            className="flex sm:h-11 md:h-20 max-h-28 max-w-14 lg:grow-0"
            src={portfolio}
            alt="pixelated icon of a file folder"
          ></img>
          <p className="text-dark md:text-base sm:text-sm">See-My-Work</p>
        </Link>
      </div>
      <div>
        <Link to="/contact">
          <img
            className="flex sm:h-11 md:h-20 max-h-28 max-w-14 grow-0"
            src={contact}
            alt="pixelated icon of an envelop"
          ></img>
          <p className="text-dark md:text-base sm:text-sm">Send-Me-A-Message</p>
        </Link>
      </div>
      <div>
        <Link to="/resume">
          <img
            height="75px"
            className="flex sm:h-11 md:h-20 max-h-28 max-w-14 grow-0"
            src={resume}
            alt="pixelated icon of a paper"
          ></img>
          <p className="text-dark md:text-base sm:text-sm m-0">
            View-My-Resume
          </p>
        </Link>
      </div>
    </section>
  );
}

export default Icons;
