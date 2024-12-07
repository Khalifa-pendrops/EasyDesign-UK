import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassArrowRight,
  faLocationDot,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Location from "./Location";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import loader from "../assets/ajax-loader.gif";
// import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";

const RoutedContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    subject: "",
    message: "",
  });

  const [selectedService, setSelectedServices] = useState(" ");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const url = "http://localhost:3000/api/form";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsSubmitting(true);
    console.log("FormData being sent:", formData);

    try {
      const response = await axios.post(url, formData, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.data.success === true) {
        Swal.fire({
          title: "Success!",
          text: "Thank you for contacting us! We will get back to you shortly.",
          icon: "success",
          confirmButtonText: "OK",
        });
        console.log(response.data.message);
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          project: "",
          subject: "",
          message: "",
        });
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again.",
          icon: "info",
          confirmButtonText: "Ok",
        });
        setIsSuccess(false);
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was a problem with your submission. Please try again later.",
        icon: "error",
        confirmButtonText: "Ok",
      });
      console.error("Form submission error:", error.message);
      console.error("Full error object:", error);
      setIsSuccess(false);
    } finally {
      setLoading(false);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setSelectedServices(e.target.value);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="rounted-contect-main-container">
      <Header />
      <div className="routed-contact-div container-sm-fluid">
        <div className="routed-contact-header container-fluid d-flex flex-column justify-content-center align-items-center w-100">
          <div className="container d-flex flex-column justify-content-center align-items-center routed-header-texts">
            <h1 className=" bold-h1">Contact Us</h1>
            <Link className="text-decoration-none" to="/">
              <p>Home / <span>Contact</span></p>
            </Link>
            {/* <p><Link to='/'>Home</Link><span>Contact</span></p> */}
          </div>
          <div
            className="rectangles-container container-fluid"
            data-aos="fade-up"
          >
            {/* THERE IS SOME ALIGNMENT ISSUES WITH THE RECTANGLES. FIX! */}
            <div className="ractangle-div container-fluid d-flex flex-column flex-sm-row gap-sm-2 justify-content-center align-items-center">
              <div className="rectangle rectangle-1 ratio raio-4x3"></div>
              <div className="rectangle rectangle-2 ratio raio-4x3"></div>
              <div className="rectangle rectangle-3 ratio raio-4x3"></div>
              <div className="rectangle rectangle-4 ratio raio-16x9"></div>
              <div className="rectangle rectangle-5 ratio raio-16x9"></div>
              <div className="rectangle rectangle-6 ratio raio-16x9"></div>
              <div className="rectangle rectangle-7 ratio raio-16x9"></div>
              <div className="rectangle rectangle-8 ratio raio-16x9"></div>
              <div className="rectangle rectangle-9 ratio raio-16x9"></div>
              <div className="rectangle rectangle-10 ratio raio-16x9"></div>
            </div>
            <div className="circle circle-left"></div>
            <div className="circle circle-right"></div>
          </div>
        </div>

        <div className="routed-contact-card container-fluid  position-relative">
          <div
            className="routed-contact-card-head d-flex flex-column justify-content-center align-items-center gap-4 container"
            data-aos="fade-up"
          >
            <h4 className="fs-1">Contact Us</h4>
            <h1 className="bold-h1 container d-flex justify-content-center align-items-center text-center">Get In Touch With Us</h1>
            <p className="head-text container-fluid">
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
                    disabled={loading}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    disabled={loading}
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
                    disabled={loading}
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
                    disabled={loading}
                  >
                    {/* <option value="" disabled selected hidden>
                      Choose a service
                    </option> */}

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
                  disabled={loading}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  disabled={loading}
                ></textarea>
                {/* <button
                  className="routed-contact-btn"
                  type="submit"
                  value="Submit"
                  disabled={loading}
                >
                  {loading ? (
                    <img src={loader} alt="Loading..." width={20} />
                  ) : (
                    "Send Message"
                  )}
                </button> */}

                <button
                  className="routed-contact-btn"
                  type="submit"
                  value="Submit"
                  //   onSubmit={handleSubmit}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
            <div
              className="form-right d-flex flex-column justify-content-center align-items-start container gap-4 m-lg-0"
              data-aos="fade-left"
            >
              <div className="form-right-item d-flex justify-content-center align-item-center">
                <FontAwesomeIcon
                  className="routed-contact-icon p-4"
                  icon={faLocationDot}
                />
                <div className="right-item d-flex flex-column justify-content-center align-item-center">
                  <p>Address</p>
                  <span>Birmingham, United Kingdom</span>
                </div>
              </div>

              <div className="form-right-item">
                <FontAwesomeIcon
                  className="routed-contact-icon p-4"
                  icon={faMobile}
                />
                <div className="right-item">
                  <p>Mobile</p>
                  <span>+44 7404 415940</span>
                </div>
              </div>

              <div className="form-right-item">
                <FontAwesomeIcon
                  className="routed-contact-icon p-4"
                  icon={faEnvelope}
                />
                <div className="right-item d-flex flex-column align-items-start justify-content-center">
                  <p>Email</p>
                  <span className="text-wrap text-md-nowrap ">info@easydesignuk.co.uk</span>
                </div>
              </div>

              <div className="row-icons">
                <a href="">
                  <FontAwesomeIcon
                    className="routed-contact-icon magnifying-glass p-4"
                    icon={faMagnifyingGlassArrowRight}
                  />
                </a>
                <a
                  href="https://www.facebook.com/share/gXcwE5qGDPkPBHPE/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="routed-social-icons p-4"
                    icon={faFacebook}
                  />
                </a>
                <a
                  href="https://www.instagram.com/easydesign.uk"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="routed-social-icons p-4"
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
      {isSubmitting && (
        <div className="loading-container">
          <img src={loader} alt="loading gif" />
        </div>
      )}
    </div>
  );
};

export default RoutedContactPage;
