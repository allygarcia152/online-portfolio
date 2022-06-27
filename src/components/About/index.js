import React from "react";

function About() {
  return (
    
    <section className="my-5 border border-dark rounded d-flex flex-column">
      <div className="d-flex flex-row justify-content-between bg-secondary border-bottom border-dark rounded-top">
        <h1 className="d-flex my-1 mx-3" id="about">
          Hi, I'm Ally
        </h1>
        <div className="circle my-3 mx-4">{"    "}</div>
      </div>
      <div className="p-4 flex-row bg-light rounded-bottom">
        <img src="" alt="Picture of Allyson "/>
        <p>
          I am a full-stack web developer working in Texas, US. I worked as an
          English teacher for three years before deciding to pursue my interest
          in software engineering. Though they seem like very different fields,
          my time teaching really built my multi-tasking skills, which I get to
          flex constantly in web-development. A lot goes in to creating
          functioning, alluring, and smart design, and I got the skills to make
          sure it all falls into place. Take a look at my work and resume, and
          when you're ready, click on my contact links below to contract me for
          your business or next project.
        </p>
      </div>
    </section>
  );
}

export default About;
