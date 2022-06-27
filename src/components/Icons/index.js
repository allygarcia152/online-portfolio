import React from "react";
import user from "../../assets/icons/users.png";
import portfolio from "../../assets/icons/folder-type.png"
import contact from "../../assets/icons/mail.png"
import resume from "../../assets/icons/note.png"

function Icons() {
  return (
    <section className="my-2 ml-2 d-flex flex-column">
      <div>
        <img height="85px" className="d-flex" src={user} alt=""></img>
        <h5 className="text-dark">Learn About Me</h5>
      </div>
      <div>
        <img height="85px" className="d-flex" src={portfolio} alt=""></img>
        <h5 className="text-dark">Learn About Me</h5>
      </div>
      <div>
        <img height="85px" className="d-flex" src={contact} alt=""></img>
        <h5 className="text-dark">Learn About Me</h5>
      </div>
      <div>
        <img height="85px" className="d-flex" src={resume} alt=""></img>
        <h5 className="text-dark">Learn About Me</h5>
      </div>
    </section>
  );
}

export default Icons;
