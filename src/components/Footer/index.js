import React from "react";
import gitHub from "../../assets/icons/pixelatedgh.png";
import linkedIn from "../../assets/icons/linkedinpixelated.png";
import facebook from "../../assets/icons/facebook.png";

function Footer() {
  return (
    <footer className="d-flex flex-row ml-2">
      <div>
        <img height="95px" className="d-flex" src={gitHub} alt=""></img>
      </div>
      <div>
        <img height="85px" className="d-flex ml-4" src={linkedIn} alt=""></img>
      </div>
      <div>
        <img height="85px" className="d-flex ml-4" src={facebook} alt=""></img>
      </div>
    </footer>
  );
}

export default Footer;
