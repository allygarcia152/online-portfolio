import React from "react";
import user from "../../assets/icons/users.png";
import portfolio from "../../assets/icons/folder-type.png"
import contact from "../../assets/icons/mail.png"
import resume from "../../assets/icons/note.png"

function Icons() {
  return (
    <section className="my-1 mx-3 d-flex flex-column">
      <div >
        <img height="85px" className="d-flex" src={user} alt=""></img>
        <p className="text-dark icon-text">Learn-About-Me</p>
      </div>
      <div >
        <img height="85px" className="d-flex" src={portfolio} alt=""></img>
        <p className="text-dark icon-text">See-My-Work</p>
      </div>
      <div >
        <img height="85px" className="d-flex" src={contact} alt=""></img>
        <p className="text-dark icon-text">Send-Me-A-Message</p>
      </div>
      <div >
        <img height="85px" className="d-flex" src={resume} alt=""></img>
        <p className="text-dark icon-text m-0">View-My-Resume</p>
      </div>
    </section>
  );
}

export default Icons;
