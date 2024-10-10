import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function ContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://your-api-url.com/subscribe", {
        email: email,
        message: message,
      });
      setMessage(response.data.message);
      alert("Thank you for subscribing!");
      setEmail("");
      setMessage("");
    } catch (error) {
      setMessage(error.response?.data?.error || "Subscription failed!");
    }
    setEmail(" ");
  };

  //   const [formState, setFormState] = useState({
  //     email: "",
  //   });

  //   const handleChange = (event) => {
  //     event.preventDefault(event.target.value);
  //     setFormState({ ...formState, [event.target.email]: event.target.value });
  //   };

  return (
    <div>
      <section
        id="/contact-us"
        className="contact-us-div  container-fluid d-flex flex-sm-row flex-column justify-content-center "
      >
        <div className="navigate-div d-flex flex-column justify-content-center align-items-start">
          <h4>Navigation</h4>
          <ul className="text-start">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        {/* <div className="contact-row d-flex  justify-content-between"> */}
        <div className="newsletter-div">
          <h4>Newsletter</h4>
          <form className="d-flex flex-column" onSubmit={handleSubscribe}>
            <label className="contact-us-label">
              Subscribe to our newsletter
            </label>
            <input
              className="contact-input-field"
              type="email"
              name="email"
              value={FormData.email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="contact-btn btn border" type="submit">
              Subscribe
            </button>
          </form>
          {message && (
            <p
            //   className="color-warning text-italics btn btn-lg btn-danger"
            //   data-bs-togggle="popover"
            //   data-bs-title="Popover title"
            //   data-bs-content="Sorry, your subscription was not successful. Try again please."
            >
              {message}
            </p>
          )}
        </div>
        <div className="contact-info-div">
          <h4>Contact Info</h4>
          <div className="contact-media">
            <p className="d-flex align-items-center">
              <FontAwesomeIcon className="contact-icons" icon={faEnvelope} />
              info@easydesignuk.co.uk
            </p>
            <p className="d-flex align-items-center">
              <FontAwesomeIcon className="contact-icons" icon={faPhone} />
              +44 7404 415940
            </p>
            <p className="d-flex align-items-center">
              <FontAwesomeIcon className="contact-icons" icon={faLocationDot} />
              Birmingham, United Kingdom
            </p>
          </div>
          <div className="social-media">
            <a href="">
              <FontAwesomeIcon className="social-icons" icon={faFacebook} />
            </a>
            <a href="">
              <FontAwesomeIcon className="social-icons" icon={faInstagram} />
            </a>
          </div>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
}

export default ContactUs;
