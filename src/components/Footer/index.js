import React from "react";
import gitHub from "../../assets/icons/pixelatedgh.png";
import linkedIn from "../../assets/icons/linkedinpixelated.png";
import facebook from "../../assets/icons/facebook.png";

function Footer() {
  return (
    <footer className="flex flex-row md:bg-thistle sm:bg-mint md:justify-start sm:justify-center md:p-2 md:ml-2 sm:p-5 mt-auto">
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/allygarcia152"
        >
          <img
            className="flex md:h-20 sm:h-10 max-h-20"
            src={gitHub}
            alt=""
          ></img>
        </a>
      </div>

      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/allyson-garcia-70b099229/"
        >
          <img
            className="flex md:h-20 sm:h-10 max-h-20 ml-4"
            src={linkedIn}
            alt=""
          ></img>
        </a>
      </div>

      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/allyson.garcia.50746"
        >
          <img
            className="flex md:h-20 sm:h-10 max-h-20 ml-4"
            src={facebook}
            alt=""
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
