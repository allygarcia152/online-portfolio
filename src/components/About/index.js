import React from "react";
import headshot from "../../assets/photos/headshot.jpeg";

function About() {
  return (
    <section className="my-5 ml-4 border border-dark rounded d-flex flex-column align-self-start">
      <div className="d-flex flex-row justify-content-between bg-secondary border-bottom border-dark rounded-top">
        <h2 className="d-flex my-1 mx-3 window-title" id="about">
          Hi, I'm Ally
        </h2>
        <div className="circle my-3 mx-4">{"    "}</div>
      </div>
      <div className="p-4 d-flex flex-row bg-light rounded-bottom">
        <img
          className="d-flex headshot"
          src={headshot}
          alt="Allyson is standing in front of a floral wall. Their head is shaved short and they have big octagonal eye glasses on."
        />
        <p className="d-flex ml-4">
          I am a full-stack web developer working in Texas, US. A lot goes in to creating
          functioning, alluring, and smart design, and I got the skills to make
          sure it all falls into place. While I have an affection for front-end design, I love working in all aspect of development and am prepared for whatever challenges and adventures your project takes me on. Take a look at my work and resume, and
          when you're ready, click on my contact link above to hire me for
          your business or next project.
        </p>
      </div>
    </section>
  );
}

export default About;
