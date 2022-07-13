import React from "react";

function Portfolio() {
  return (
    <section className="d-flex flex-row flex-wrap">
      <div className="my-3 ml-4 border border-dark rounded d-flex flex-column align-self-start">
        <div className="d-flex flex-row justify-content-between bg-secondary border-bottom border-dark rounded-top">
          <a
            target="_blank"
            href="https://protected-headland-96637.herokuapp.com/"
          >
            <h2 className="d-flex my-2 mx-3 window-title" id="about">
              code_it(MERN stack)
            </h2>
          </a>

          <div className="circle my-3 mx-4">{"    "}</div>
        </div>
        <a target="_blank" href="https://github.com/jwhitney2209/code-it">
          <div className="p-4 d-flex flex-column bg-code_it rounded-bottom port-window" />
        </a>
      </div>
      <div className="my-3 ml-4 border border-dark rounded d-flex flex-column align-self-start port-pane">
        <div className="d-flex flex-row justify-content-between bg-secondary border-bottom border-dark rounded-top">
          <a target="_blank" href="https://github.com/allygarcia152/run-buddy">
            <h2 className="d-flex my-2 mx-3 window-title" id="about">
              RunBuddy(HTML/CSS)
            </h2>{" "}
          </a>
          <div className="circle my-3 mx-4">{"    "}</div>
        </div>
        <a href="https://allygarcia152.github.io/run-buddy/" target="_blank">
          <div className="p-4 d-flex flex-column bg-runbuddy rounded-bottom port-window"></div>
        </a>
      </div>
      <div className="my-3 ml-4 border border-dark rounded d-flex flex-column align-self-start">
        <div className="d-flex flex-row justify-content-between bg-secondary border-bottom border-dark rounded-top">
          <a
            target="_blank"
            href="https://github.com/allygarcia152/readme-generator"
          >
            <h2 className="d-flex my-2 mx-3 window-title" id="about">
              README Generator(Node)
            </h2>
          </a>

          <div className="circle my-3 mx-4">{"    "}</div>
        </div>
        <a
          target="_blank"
          href="https://github.com/allygarcia152/readme-generator"
        >
          <div className="p-4 d-flex flex-column bg-readme rounded-bottom port-window" />
        </a>
      </div>
      <div className="my-3 ml-4 border border-dark rounded d-flex flex-column align-self-start">
        <div className="d-flex flex-row justify-content-between bg-secondary border-bottom border-dark rounded-top">
          <a
            target="_blank"
            href="https://github.com/allygarcia152/employee-tracker"
          >
            <h2 className="d-flex my-2 mx-3 window-title" id="about">
              Employee Tracker(SQL)
            </h2>
          </a>
          <div className="circle my-3 mx-4">{"    "}</div>
        </div>
        <a
          target="_blank"
          href="https://github.com/allygarcia152/employee-tracker"
        >
          <div className="p-4 d-flex flex-column bg-tracker rounded-bottom port-window" />
        </a>
      </div>
      <div className="my-3 ml-4 border border-dark rounded d-flex flex-column align-self-start">
        <div className="d-flex flex-row justify-content-between bg-secondary border-bottom border-dark rounded-top">
          <a
            target="_blank"
            href="https://gist.github.com/allygarcia152/8714c51ed2bd606de03fe8842b0c9b90"
          >
            <h2 className="d-flex my-2 mx-3 window-title" id="about">
              Regex Tutorial(Regex)
            </h2>
          </a>
          <div className="circle my-3 mx-4">{"    "}</div>
        </div>
        <a
          target="_blank"
          href="https://gist.github.com/allygarcia152/8714c51ed2bd606de03fe8842b0c9b90"
        >
          <div className="p-4 d-flex flex-column bg-regex rounded-bottom port-window" />
        </a>
      </div>
      <div className="my-3 ml-4 border border-dark rounded d-flex flex-column align-self-start">
        <div className="d-flex flex-row justify-content-between bg-secondary border-bottom border-dark rounded-top">
          <a target="_blank" href="https://github.com/ArchieDonaho/InsertDisc">
            <h2 className="d-flex my-2 mx-3 window-title" id="about">
              InsertDisc(Full-Stack)
            </h2>
          </a>
          <div className="circle my-3 mx-4">{"    "}</div>
        </div>
        <a target="_blank" href="https://insertdisc.herokuapp.com/">
          <div className="p-4 d-flex flex-column bg-insertdisc rounded-bottom port-window"></div>
        </a>
      </div>
      <div className="my-3 ml-4 border border-dark rounded d-flex flex-column align-self-start port-pane">
        <div className="d-flex flex-row justify-content-between bg-secondary border-bottom border-dark rounded-top">
          <a target="_blank" href="https://github.com/allygarcia152/photo-port">
            <h2 className="d-flex my-2 mx-3 window-title" id="about">
              OhSnap!(React)
            </h2>
          </a>
          <div className="circle my-3 mx-4">{"    "}</div>
        </div>
        <a
          target="_blank"
          href="https://allygarcia152.github.io/photo-port/#about"
        >
          <div className="p-4 d-flex flex-column bg-oh-snap rounded-bottom port-window" />
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
