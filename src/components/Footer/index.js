import React from "react";
import gitHub from "../../assets/icons/pixelatedgh.png";
import linkedIn from "../../assets/icons/linkedinpixelated.png";
import facebook from "../../assets/icons/facebook.png";

function Footer() {
  return (
    <footer className="d-flex flex-row ml-2">
      <div>
        <a target="_blank" rel="noreferrer" href="https://github.com/allygarcia152">
          <img height="85px" className="d-flex" src={gitHub} alt=""></img>
        </a>
      </div>

      <div>
        <a
          target="_blank" rel="noreferrer"
          href="https://www.linkedin.com/in/allyson-garcia-70b099229/"
        >
          <img
            height="80px"
            className="d-flex ml-4"
            src={linkedIn}
            alt=""
          ></img>
        </a>
      </div>

      <div>
      <a
          target="_blank" rel="noreferrer"
          href="https://www.facebook.com/allyson.garcia.50746"
        >
        <img height="80px" className="d-flex ml-4" src={facebook} alt=""></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
