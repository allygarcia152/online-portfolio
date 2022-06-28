import React from "react";
import resume from "../../assets/resume/Allyson_Garcia_Dev_Resume.pdf";
import resumeIcon from "../../assets/icons/note.png";

function Resume() {
  return (
    <section className="my-5 ml-4 border border-dark rounded d-flex flex-column align-self-start">
      <div className="d-flex flex-row justify-content-between bg-secondary border-bottom border-dark rounded-top">
        <h2 className="d-flex my-1 mx-3 window-title" id="about">
          My Resume
        </h2>
        <div className="circle my-3 mx-4">{"    "}</div>
      </div>
      <div className="p-4 d-flex flex-row bg-light rounded-bottom">
        <a className="d-flex flex-column p-2" href={resume} download>
          <img width="75px" src={resumeIcon}></img> 
          <p className="download">Click-to-Download-Resume </p>
        </a>
        <div className="d-flex ml-4">
          <iframe
            src={resume}
            type="resume/pdf"
            width="900px"
            height="500px"
            view="FitH"
            scrollbar="1"
            toolbar="0"
          />
        </div>
      </div>
    </section>
  );
}

export default Resume;
