import React from "react";

function Portfolio() {
  return (
    <section className="flex flex-row flex-wrap md:gap-0 sm:gap-3">
      <div className="flex flex-col md:my-3 md:ml-4 border border-dark rounded self-start">
        <div className="flex flex-row justify-between bg-mellow border-bottom rounded-top mb-0">
          <a
            target="_blank"
            href="https://protected-headland-96637.herokuapp.com/"
          >
            <h2 className="flex p-1 md:ml-2 sm:ml-1 mb-0 window-title text-black">
              code_it(MERN stack)
            </h2>
          </a>

          <div className="circle md:my-3 md:mx-4 sm:my-2 sm:mr-3">{"    "}</div>
        </div>
        <a target="_blank" href="https://github.com/jwhitney2209/code-it">
          <div className="p-4 flex flex-col bg-code_it rounded-bottom port-window" />
        </a>
      </div>

      <div className="flex flex-col md:my-3 md:ml-4 border border-dark rounded self-start">
        <div className="flex flex-row justify-between bg-mellow border-bottom rounded-top mb-0">
          <a target="_blank" href="https://github.com/allygarcia152/run-buddy">
            <h2 className="flex p-1 md:ml-2 sm:ml-1 mb-0 window-title text-black">
              RunBuddy(HTML/CSS)
            </h2>{" "}
          </a>
          <div className="circle md:my-3 md:mx-4 sm:my-2 sm:mr-3">{"    "}</div>
        </div>
        <a href="https://allygarcia152.github.io/run-buddy/" target="_blank">
          <div className="p-4 flex flex-col bg-runbuddy rounded-bottom port-window"></div>
        </a>
      </div>

      <div className="flex flex-col md:my-3 md:ml-4 border border-dark rounded self-start">
        <div className="flex flex-row justify-between bg-mellow border-bottom rounded-top mb-0">
          <a
            target="_blank"
            href="https://github.com/allygarcia152/readme-generator"
          >
            <h2 className="flex p-1 md:ml-2 sm:ml-1 mb-0 window-title text-black">
              README Generator(Node)
            </h2>
          </a>

          <div className="circle md:my-3 md:mx-4 sm:my-2 sm:mr-3">{"    "}</div>
        </div>
        <a
          target="_blank"
          href="https://github.com/allygarcia152/readme-generator"
        >
          <div className="p-4 flex flex-col bg-readme rounded-bottom port-window" />
        </a>
      </div>

      <div className="flex flex-col md:my-3 md:ml-4 border border-dark rounded self-start">
        <div className="flex flex-row justify-between bg-mellow border-bottom rounded-top mb-0">
          <a
            target="_blank"
            href="https://github.com/allygarcia152/employee-tracker"
          >
            <h2 className="flex p-1 md:ml-2 sm:ml-1 mb-0 window-title text-black">
              Employee Tracker(SQL)
            </h2>
          </a>
          <div className="circle md:my-3 md:mx-4 sm:my-2 sm:mr-3">{"    "}</div>
        </div>
        <a
          target="_blank"
          href="https://github.com/allygarcia152/employee-tracker"
        >
          <div className="p-4 flex flex-col bg-tracker rounded-bottom port-window" />
        </a>
      </div>

      <div className="flex flex-col md:my-3 md:ml-4 border border-dark rounded self-start">
        <div className="flex flex-row justify-between bg-mellow border-bottom rounded-top mb-0">
          <a
            target="_blank"
            href="https://gist.github.com/allygarcia152/8714c51ed2bd606de03fe8842b0c9b90"
          >
            <h2 className="flex p-1 md:ml-2 sm:ml-1 mb-0 window-title text-black">
              Regex Tutorial(Regex)
            </h2>
          </a>
          <div className="circle md:my-3 md:mx-4 sm:my-2 sm:mr-3">{"    "}</div>
        </div>
        <a
          target="_blank"
          href="https://gist.github.com/allygarcia152/8714c51ed2bd606de03fe8842b0c9b90"
        >
          <div className="p-4 flex flex-col bg-regex rounded-bottom port-window" />
        </a>
      </div>

      <div className="flex flex-col md:my-3 md:ml-4 border border-dark rounded self-start">
        <div className="flex flex-row justify-between bg-mellow border-bottom rounded-top mb-0">
          <a target="_blank" href="https://github.com/ArchieDonaho/InsertDisc">
            <h2 className="flex p-1 md:ml-2 sm:ml-1 mb-0 window-title text-black">
              InsertDisc(Full-Stack)
            </h2>
          </a>
          <div className="circle md:my-3 md:mx-4 sm:my-2 sm:mr-3">{"    "}</div>
        </div>
        <a target="_blank" href="https://insertdisc.herokuapp.com/">
          <div className="p-4 flex flex-col bg-insertdisc rounded-bottom port-window"></div>
        </a>
      </div>

      <div className="flex flex-col md:my-3 md:ml-4 border border-dark rounded self-start">
        <div className="flex flex-row justify-between bg-mellow border-bottom rounded-top mb-0">
          <a target="_blank" href="https://github.com/allygarcia152/photo-port">
            <h2 className="flex p-1 md:ml-2 sm:ml-1 mb-0 window-title text-black">
              OhSnap!(React)
            </h2>
          </a>
          <div className="circle md:my-3 md:mx-4 sm:my-2 sm:mr-3">{"    "}</div>
        </div>
        <a
          target="_blank"
          href="https://allygarcia152.github.io/photo-port/#about"
        >
          <div className="p-4 flex flex-col bg-oh-snap rounded-bottom port-window" />
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
