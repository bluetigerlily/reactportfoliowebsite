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
          {/* <div className="mapaddressemailphonecontainerclass">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="mapframeclass"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJj_nNO9cjQYYRakWWFfWVjHg&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8lalalalla"
            />
            <div className="informationoutercontainerclass">
              <div className="addressoutercontainer">
                <h2 className="addresstitleclass">
                  ADDRESS
                </h2>
                <p className="addressclass">
           
                </p>
              </div>
              <div className="emailcontainerclass">
                <h2 className="emailtitleclass">
                  EMAIL
                </h2>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                {/* <a className="emailclass">
                </a>
                </div>
                <div className="phonecontainerclass">
                <h2 className="phonetitleclass">
                  PHONE
                </h2>
                <p className="phoneclass"></p>
              </div>
            </div>
          </div> */} 
          <form
            data-netlify="true"
            name="contact"
            onSubmit={handleSubmit}
            className="contactform">
            <h2 className="contactformtitle">
              Contact Me
            </h2>
            <p className="paramessageclass">
              If you think I'd be a good fit for your position or would like to just learn more,
               please reach out to me using the form below.  Thank you for
                your time!
            </p>
            <div className="inputcontainer">
            <div className="nameclass">
              <label htmlFor="name" className="namelabel">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="nameinputclass"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
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
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
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
                placeholder="Leave a message"
                className="messageinputclass"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="submitbuttonclass">
              Submit
            </button>
            </div>
        

        <div className="footer">
          <div className="linkedincontainer">
            <a href="https://www.linkedin.com/feed/" id="linkedin" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
          <div className="githubcontainer">
            <a href="https://github.com/bluetigerlily" id="linkedin" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </div>


        </form>
        </div>
      </section>
    );
  }