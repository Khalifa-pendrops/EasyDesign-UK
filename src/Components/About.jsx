import React, { useRef } from "react";
import useOnScreen from "./ScreenLoadSetup";
import { Link } from "react-router-dom";
import aboutus from "../assets/about-1.png";

function About() {
  const ref = useRef();
  const isVisible = useOnScreen(ref, "0px");
  return (
    <div
      className="about-container-main containe d-flex justify-content-center align-items-center"
      ref={ref}
      style={{
        height: "100%",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(100px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <section
        id="about"
        className="home-about-div container container-sm d-flex flex-column flex-lg-row justify-content-center align-items-center gap-5 "
      >
        <div className="about-hero-image-div d-none d-md-inline">
          <img
            className="about-hero-image animate-second"
            data-aos="fade-up"
            data-aos-duration="1000"
            src={aboutus}
            alt="about image"
          />
        </div>
        <div
          className="home-about-right container d-flex flex-column justify-content-center align-items-start ps-4 ps-xl-0"
          data-aos="fade-up"
        >
          <div className="about-top-header" data-aos="fade-up">
            <h4 className="colored-h4-text fs-3 fs-xxl-0">About Us</h4>
            <h1 className="colored-h1-text  fw-bolder fs-1 fs-md-2 fs-lg-3 fs-xxl-0">
              Crafting Digital Experiences for Your Success
            </h1>
          </div>
          <div className="d-inline d-md-none w-100">
            <img
              className="show-image animate-second w-100"
              data-aos="fade-up"
              src={aboutus}
              alt="about image"
            />
          </div>
          <p data-aos="fade-up" className="about-p lh-base">
            At Easy Design UK, we specialize in creating stunning,
            high-performance websites and digital solutions tailored to your
            business needs. With a team of skilled developers and designers, we
            are committed to delivering innovative and effective web development
            services that help you stand out in the digital world. <br></br>
            <br></br>Our approach is simple yet effective: we listen to your
            goals, understand your audience, and deliver a product that not only
            looks great but also drives results. From bespoke websites to
            complex web applications, our expertise covers all aspects of
            digital design and development.
          </p>
          <Link to="/routedcontact">
            <button className="home-about-btn btn py-xl-4 px-3 py-3 px-xl-5 fw-bold">
              Talk To Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
