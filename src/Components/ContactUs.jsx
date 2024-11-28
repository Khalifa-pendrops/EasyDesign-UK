import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import SubscribeSuccessPage from "./SubscriptionSuccessPage";
import SubscriptionErrorPage from "./SubscriptionErrorPage";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  const url = "https://localhost:5000/api/newsletter";

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSuccess(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(url, { email });
      console.log(response.data);
      if (response.data.success) {
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
      setIsModalOpen(true);
    } catch (error) {
      setIsSuccess(false);
      setIsModalOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-us-div  container-fluid d-flex flex-lg-row flex-column justify-content-center mt-5">
      <section
        id="/contact-us"
        className="container-sm d-flex flex-column flex-lg-row gap-4"
      >
        <div className="navigate-div d-flex flex-column justify-content-center align-items-start w-100">
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
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <Link to="/routedcontact">Contact Us</Link>
            </li>
          </ul>
        </div>
        {/* <div className="contact-row d-flex  justify-content-between"> */}
        <div className="newsletter-div w-100">
          <h4>Newsletter</h4>
          <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <label className="contact-us-label">
              Subscribe to our newsletter
            </label>
            <input
              className="contact-input-field "
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
            <button
              className="contact-btn btn border"
              type="submit"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {/* OBSERVE THE MODAL HERE!!   */}
          <Modal isOpen={isModalOpen} closeModal={closeModal}>
            {isSuccess === true && <SubscribeSuccessPage />}
            {isSuccess === false && <SubscriptionErrorPage />}
          </Modal>
        </div>
        <div className="contact-info-div w-100 ">
          <h4>Contact Info</h4>
          <div className="contact-media">
            <a
              href="mailto:info@easydesignuk.co.uk"
              className="d-flex align-items-center gap-2"
            >
              <FontAwesomeIcon className="contact-icons" icon={faEnvelope} />
              info@easydesignuk.co.uk
            </a>
            <a
              className="d-flex align-items-center gap-2"
              href="tel:+44 7404 415940"
            >
              <FontAwesomeIcon className="contact-icons" icon={faPhone} />
              +44 7404 415940
            </a>
            <a
              className="d-flex align-items-center gap-2"
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155456.01736159614!2d-2.0284370255623867!3d52.49723467351431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aeee7998!2sBirmingham%2C%20UK!5e0!3m2!1sen!2sng!4v1726748313375!5m2!1sen!2sng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="contact-icons" icon={faLocationDot} />
              Birmingham, United Kingdom
            </a>
          </div>
          <div className="social-media">
            <a
              href="https://www.facebook.com/share/gXcwE5qGDPkPBHPE/"
              target="_blank"
            >
              <FontAwesomeIcon className="social-icons" icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/easydesign.uk" target="_blank">
              <FontAwesomeIcon className="social-icons" icon={faInstagram} />
            </a>
          </div>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default ContactUs;
