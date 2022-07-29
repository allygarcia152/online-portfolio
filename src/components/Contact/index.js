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
    <section className="flex flex-col md:mt-5 md:ml-5 border border-dark rounded md:max-w-screen-md sm:max-w-screen sm:min-h-80 md:max-h-full md:w-2/3 md:justify-start sm:justify-center sm:m-2">
      <div className="flex flex-row justify-between bg-mellow border-bottom rounded-top">
        <h2 className="flex p-1 md:ml-2 sm:ml-1 mb-0 align-self-center text-black">
          Send Me A Message :)
        </h2>
        <div className="circle md:my-3 md:mx-4 sm:my-2 sm:mr-3">{"    "}</div>
      </div>
      <div className="md:p-4 flex flex-col bg-light rounded-bottom md:text-2xl sm:text-base sm:p-3">
        <div className="flex flex-col">
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
          className="flex flex-col md:ml-4 sm:ml-0"
          id="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="flex md:flex-row sm:flex-col">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              defaultValue={toSend.name}
              onBlur={handleChange}
            />
          </div>
          <div className="flex md:flex-row sm:flex-col">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              name="email"
              defaultValue={toSend.email}
              onBlur={handleChange}
            />
          </div>

          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            name="message"
            defaultValue={toSend.message}
            onBlur={handleChange}
            className="w-full mb-2"
          />

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
          <button type="submit" className="w-1/4">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
