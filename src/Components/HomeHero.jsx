import React from "react";
import { Link } from "react-router-dom";
import heroimage from "../assets/hero-image.png";

function HomeHero() {
  return (
    <div>
      <section
        id="home"
        className="d-flex flex-column justify-content-center align-items-center mb-4 container-xxl"
      >
        <div className=" position-relative hero-container d-flex flex-column flex-sm-row gap-4 container-xxl">
          <div className="hero-left d-flex flex-column justify-content-center align-items-md-start align-items-center  gap-2">
            <h1 className="display-2 fs-1 w-sm-100 w-md-50 fw-bolder">
              Transform Your Online Presence
            </h1>

            <p className="w-sm-100 w-md-50 fs-5 text-muted lh-base fw-medium">
              Easy Design UK offers innovative web development and digital
              solutions to elevate your business in the digital landscape.
            </p>

            <Link to="/routedcontact">
              <button className="home-hero-btn btn py-4 px-5 py-sm-3 px-sm-4 ">
                Start Your Journey
              </button>
            </Link>
          </div>
          <img
            className="home-hero-image w-50 "
            src={heroimage}
            alt="hero image"
          />
          {/* <div className="shape-container">
            <div className="triangle triangle-1"></div>
            <div className="triangle triangle-2"></div>
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="heart"></div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default HomeHero;
