import React from "react";
import headshot from "../../assets/photos/headshot.jpeg";

function About() {
  return (
    <section className="flex flex-col md:mt-5 md:ml-5 border border-dark rounded self-start md:max-w-screen-md sm:max-w-screen sm:min-h-80 md:max-h-full">
      <div className="flex flex-row justify-between bg-mellow border-bottom rounded-top">
        <h2
          className="flex p-1 md:ml-2 sm:ml-1 mb-0 align-self-center text-black"
          id="about"
        >
          Hi, I'm Ally
        </h2>
        <div className="circle md:my-3 md:mx-4 sm:my-2 sm:mr-3">{"    "}</div>
      </div>

      <div className="sm:block md:flex-row md:flex-wrap p-4 bg-light rounded-bottom">
        <img
          className="md:flex sm:block headshot md:max-w-md md:h-48 md:max-h-auto md:w-auto sm:h-32 sm:w-2/5 sm:max-w-min md:self-start sm:float-left sm:mr-5"
          src={headshot}
          alt="Allyson is standing in front of a floral wall. Their head is shaved short and they have big octagonal eye glasses on."
        />
        <p className="md:flex md:flex-wrap sm:block md:ml-8 md:p-0 sm:pl-2 md:text-2xl sm:text-base md:leading-7 sm:leading-4 sm:mb-0">
          I am a full-stack web developer working in Texas, US. A lot goes in to
          creating functioning, alluring, and smart design, and I got the skills
          to make sure it all falls into place. While I have an affection for
          front-end design, I love working in all aspect of development and am
          prepared for whatever challenges and adventures your project takes me
          on. Take a look at my work and resume, and when you're ready, click on
          my contact link above to hire me for your business or next project.
        </p>
      </div>
    </section>
  );
}

export default About;
