import React, { useEffect, useState } from "react";
import axios from "axios";
// import WOW from "wowjs";
import { Link } from "react-router-dom";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faTurnUp,
  faLocationDot,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Location from "./Location";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const RoutedContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    subject: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [selectedService, setSelectedServices] = useState(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // i will add API call here or any other backend logic here to send the form data to your server.
    // try {
    //   const response = await axios.post(
    //     "https://localhost:5174/message",
    //     formData
    //   );
    //   console.log("Form Data Submitted:", formData);
    //   setResponseMessage(response.data.message);
    // }
    axios
      .post("http://loccalhost:5175/submit-form", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error submitting form: ", error);
      });

    // .catch (error) => {
    //   setResponseMessage(
    //     error.response?.data?.error || "Failed to send message!"
    //   );
    //   setSelectedServices(
    //     error.response?.data?.error ||
    //       "You didn't select a service. Kindly select a service."
    //   );
    // }
  };

  const handleChange = (e) => {
    setSelectedServices(e.target.value);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //   useEffect(() => {
  //     new WOW.WOW().init();
  //   }, []);

  return (
    <div className="rounted-contect-main-container">
      <Header />
      <div className="routed-contact-div container-sm-fluid">
        <div className="routed-contact-header w-100">
          <h1>Contact Us</h1>
          <div>
            <Link className="contact-linked" to="/">
              <p className="">
                Home / <span>Contact</span>
              </p>
            </Link>
          </div>
          <div
            className="rectangles-container container-fluid"
            data-aos="fade-up"
          >
            {/* THERE IS SOME ALIGNMENT ISSUES WITH THE RECTANGLES. FIX! */}
            <div className="ractangle-div container-fluid d-flex flex-column flex-sm-row gap-sm-2 justify-content-center align-items-center">
              <div className="rectangle rectangle-1"></div>
              <div className="rectangle rectangle-2"></div>
              <div className="rectangle rectangle-3"></div>
              <div className="rectangle rectangle-4"></div>
              <div className="rectangle rectangle-5"></div>
              <div className="rectangle rectangle-6"></div>
              <div className="rectangle rectangle-7"></div>
              <div className="rectangle rectangle-8"></div>
              <div className="rectangle rectangle-9"></div>
              <div className="rectangle rectangle-10"></div>
            </div>
            <div className="circle circle-left"></div>
            <div className="circle circle-right"></div>
          </div>
        </div>

        <div className="routed-contact-card container-fluid  position-relative">
          <div
            className="routed-contact-card-head d-flex flex-column justify-content-center align-items-center gap-4"
            data-aos="fade-up"
          >
            <h4 className="">Contact Us</h4>
            <h1 className="bold-h1">Get In Touch With Us</h1>
            <p className="head-text w-100">
              We'd love to hear from you! Whether you have a question about our
              services, need a project quote, or just want to say hello, our
              team is here to help. Reach out to us using the form below, and
              we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="routed-contact-form d-flex flex-column flex-lg-row justify-content-center container-lg p-0">
            <div
              className="form-left d-flex flex-column justify-content-center align-items-start container w-100 p-0"
              data-aos="fade-right"
            >
              <h1 className="bold-h1">Get In Touch</h1>
              <p>Send Us a Message</p>
              <form
                method="post"
                onSubmit={handleSubmit}
                className="container p-0"
              >
                <div className="input-row d-flex flex-column flex-lg-row justify-content-center alighn-items-center w-100 m-0">
                  <input
                    className="w-100"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="input-row d-flex flex-column flex-lg-row gap-2 justify-content-center alighn-items-center w-100 m-0">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    required
                  />
                  <label className="">
                    Your Project <br></br>
                  </label>
                  <select
                    className="w-100"
                    id="services"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                  >
                    <option
                      className="disabled-colored-select"
                      value="disabled"
                    >
                      Choose a service
                    </option>
                    <option value="branding">Business Branding</option>
                    <option value="graphics">Graphics Design</option>
                    <option value="social-media">
                      Social Media Management
                    </option>
                    <option value="video-editing">Video Editing</option>
                    <option value="web-dev">Web and App Development</option>
                  </select>
                </div>
                <input
                  className="w-100"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                ></textarea>
                <button
                  className="routed-contact-btn"
                  type="submit"
                  value="Submit"
                  onSubmit={handleSubmit}
                >
                  Send Message
                </button>
              </form>
              {responseMessage && <p>{responseMessage}</p>}
            </div>
            <div
              className="form-right d-flex flex-column justify-content-center align-items-start container gap-4 m-lg-0"
              data-aos="fade-left"
            >
              <div className="form-right-item d-flex justify-content-center align-item-center">
                <FontAwesomeIcon
                  className="routed-contact-icon"
                  icon={faLocationDot}
                />
                <div className="right-item d-flex flex-column justify-content-center align-item-center">
                  <p>Address</p>
                  <span>Birmingham, United Kingdom</span>
                </div>
              </div>

              <div className="form-right-item">
                <FontAwesomeIcon
                  className="routed-contact-icon"
                  icon={faMobile}
                />
                <div className="right-item">
                  <p>Mobile</p>
                  <span>+44 7404 415940</span>
                </div>
              </div>

              <div className="form-right-item">
                <FontAwesomeIcon
                  className="routed-contact-icon"
                  icon={faEnvelope}
                />
                <div className="right-item">
                  <p>Email</p>
                  <span>info@easydesignuk.co.uk</span>
                </div>
              </div>

              <div className="row-icons">
                <a href="">
                  <FontAwesomeIcon
                    className="routed-contact-icon"
                    icon={faTurnUp}
                  />
                </a>
                <a
                  href="https://www.facebook.com/share/gXcwE5qGDPkPBHPE/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="routed-social-icons"
                    icon={faFacebook}
                  />
                </a>
                <a
                  href="https://www.instagram.com/easydesign.uk"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="routed-social-icons"
                    icon={faInstagram}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="circle2 mid-circle-left"></div>
          <div className="circle2 mid-circle-right"></div>
        </div>
        <Location />
      </div>
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default RoutedContactPage;
