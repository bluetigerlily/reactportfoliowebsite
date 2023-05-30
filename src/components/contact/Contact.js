import React from "react";
import "./Contact.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
  
    function encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));
    }
  
    return (
      <section id="contact" className="relative">

        <div className="contactoutercontainerclass">
          <img className="contactSvg" loading="lazy" alt="">
          </img>
          <div className="formcontainer">
          <form
            data-netlify="true"
            name="contact"
            onSubmit={handleSubmit}
            className="contactform">
            <h1 className="contactformtitle">
              Contact Me
            </h1>
            <p className="paramessageclass">
              If you think I'd be a good fit for your position or would like to just learn more,
               please reach out to me using the form below.  Thank you for
                your time!
            </p>
            <div className="inputcontainer">
            <div className="nameandemailclass">
            <div className="nameclass">
              <label htmlFor="name" className="namelabel">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="nameinputclass"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="emailclass">
              <label htmlFor="email" className="emaillabel">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="emailinputclass"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            </div>
            <div className="messageclass">
              <label
                htmlFor="message"
                className="messagelabel">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="messageinputclass"
                onChange={(e) => setMessage(e.target.value)} 
              />
            </div>
            <button
              type="submit"
              className="submitbuttonclass">
              Contact Me Today
            </button>
            </div>
        

        <div className="footer">
          <div className="linkedincontainer">
            <a href="https://www.linkedin.com/in/haley-moses-38662a94/" id="linkedin" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
          <div className="githubcontainer">
            <a href="https://github.com/bluetigerlily" id="linkedin" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </div>


        </form>
        </div>
        </div>
      </section>
    );
  }