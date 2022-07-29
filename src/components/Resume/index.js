import React from "react";
import resume from "../../assets/resume/Allyson_Garcia_Dev_Resume.pdf";
import resumeIcon from "../../assets/icons/note.png";

function Resume() {
  return (
    <section className="flex flex-col md:mt-5 md:ml-5 sm:m-0 border border-dark rounded self-start max-w-screen sm:min-h-80 md:max-h-full">
      <div className="flex flex-row justify-between bg-mellow border-bottom rounded-top">
        <h2 className="flex p-1 md:ml-2 sm:ml-1 mb-0 align-self-center text-black">
          My Resume
        </h2>
        <div className="circle md:my-3 md:mx-4 sm:my-2 sm:mr-3">{"    "}</div>
      </div>

      <div className="md:p-4 sm:p-3 flex md:flex-row sm:flex-col-reverse flex-wrap bg-light rounded-bottom">
        <a className="flex flex-col p-2" href={resume} download>
          <img width="65px" src={resumeIcon}></img>
          <p className="download flex-wrap">Click-to-Download</p>
        </a>
        <div className="flex">
          <iframe
            className="md:ml-10 sm:ml-0"
            src={resume}
            type="resume/pdf"
            width="800px"
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
