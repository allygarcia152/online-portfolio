import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { send } from "emailjs-com";

function ContactForm() {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sentMessage, setSentMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", toSend);
    }
    send("service_ux2v6vj", "template_u0g3ivm", toSend, "am70tZgv-rS_vq-HU")
      .then((response) => {
        console.log(
          "Success! Your message was sent.",
          response.status,
          response.text
        );
        setSentMessage("Message sent. Thank you! I will reach out soon.");
        toSend([]);
        setToSend({ ...toSend, toSend });
      })
      .catch((err) => {
        console.log("Oops! There was a problem...", err);
      });
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    console.log("errorMessage", errorMessage);

    if (!errorMessage) {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    }
  };

  console.log(setToSend);

  return (
    <section className="my-5 ml-4 border border-dark rounded d-flex flex-column align-self-start">
      <div className="d-flex flex-row justify-content-between bg-secondary border-bottom border-dark rounded-top">
        <h2 className="d-flex my-1 mx-3 window-title" data-testid="h2tag">
          Send Me A Message
        </h2>
        <div className="circle my-3 mx-4">{"    "}</div>
      </div>
      <div className="p-4 d-flex flex-column bg-light rounded-bottom">
        <div className="d-flex flex-column">
          <p>
            Email:{" "}
            <a target="blank" href="mailto:allygarcia152@gmail.com">
              allygarcia152@gmail.com
            </a>
          </p>
          <p>
            Phone: <span>956.543.3879</span>
          </p>
        </div>
        <form
          className="d-flex flex-column ml-4"
          id="contact-form"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              defaultValue={toSend.name}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              name="email"
              defaultValue={toSend.email}
              onBlur={handleChange}
            />
          </div>
          <div className="align-self-start flex-column">
            <label htmlFor="message">Message:</label>
            <textarea
              type="text"
              name="message"
              rows="5"
              cols="100"
              defaultValue={toSend.message}
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          {sentMessage && (
            <div>
              <p className="text-success">{sentMessage}</p>
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
