import React from "react";
import gitHub from "../../assets/icons/pixelatedgh.png";
import facebook from "../../assets/icons/facebook.png";
import linkedIn from "../../assets/icons/linkedinpixelated.png";

function Footer() {
  return (
    <footer className="d-flex flex-row ml-2">
      <div>
        <img height="85px" className="d-flex" src={gitHub} alt=""></img>
      </div>
    </footer>
  );
}

export default Footer;
