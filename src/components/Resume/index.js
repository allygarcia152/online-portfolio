import React from "react";
import resume from "../../assets/resume/Allyson_Garcia_Dev_Resume.pdf";
import resumeIcon from "../../assets/icons/note.png";

function Resume() {
  return (
    <section className="my-5 ml-4 border border-dark rounded d-flex flex-column align-self-start">
      <div className="d-flex flex-row justify-content-between bg-secondary border-bottom border-dark rounded-top">
        <h2 className="d-flex my-1 mx-3" id="about">
          My Resume
        </h2>
        <div className="circle my-3 mx-4">{"    "}</div>
      </div>
      <div className="p-4 d-flex flex-row bg-light rounded-bottom">
        <a href={resume} download>
          <img height="75px" src={resumeIcon}></img>
          Click-to-Download-Resume
        </a>
        <p className="d-flex ml-4">
          insert ifram or embed code here
        </p>
      </div>
    </section>
  );
}

export default Resume;
