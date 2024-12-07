import React from "react";
import { Link } from "react-router-dom";
import heroimage from "../assets/hero-image.png";

function HomeHero() {
  return (
    <div className="hero-container-main container-fluid d-flex justify-content-center align-items-center position-relative min-vh-100">
      <section
        id="home"
        className="d-flex flex-column justify-content-center align-items-center container-xxl pt-5 p-xl-0 "
      >
        <div className="hero-container d-flex flex-column flex-lg-row justify-content-center align-items-center gap-5 container-fluid container-xl-sm">
          <div
            className="hero-left d-flex flex-column justify-content-center align-items-md-start gap-2 h-100 w-100 container-fluid "
            data-aos="fade-right"
          >
            <h1
              className="colored-h1-text  fw-bolder fs-1 fs-md-2 fs-lg-3 fs-xxl-0"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
              Transform Your Online Presence
            </h1>

            <p
              className="w-sm-100 w-md-25 fs-5 text-muted lh-base fw-medium"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="10"
            >
              Easy Design UK offers innovative web development and digital
              solutions to elevate your business in the digital landscape.
            </p>

            <Link to="/routedcontact">
              <button
                className="home-hero-btn btn py-xl-4 px-3 py-3 px-sm-4 fw-bold"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                Start Your Journey
              </button>
            </Link>
          </div>
          <img
            className="home-hero-image  w-50"
            data-aos="fade-left"
            src={heroimage}
            alt="hero image"
          />
          <div className="shape-container container-fluid d-flex justify-content-center align-items-center position-absolute overflow- top-0 start-0 ">
            <div className="container-sm triangle triangle-1 position-absolute "></div>
            <div className="triangle triangle-2 position-absolute"></div>
            <div className="circle-home circle-home-1 position-absolute"></div>
            <div className="circle-home circle-home-2 position-absolute"></div>
            <div className="circle-home circle-home-3 position-absolute"></div>
            <div className="heart position-absolute"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeHero;
