import React, { useRef } from "react";
import useOnScreen from "./ScreenLoadSetup";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function Pricing() {
  const ref = useRef();
  const isVisible = useOnScreen(ref, "0px");
  return (
    <div
      ref={ref}
      style={{
        minHeight: "100vh",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(100px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >      <section
        id="pricing"
        className="pricing-parent-container container-fluid my-5 d-flex flex-column justify-content-center align-items-center gap-5 border"
      >
        <div
          className="pricing-top-div d-flex flex-column justify-content-center align-items-center text-center"
          data-aos="fade-up"
        >
          <h4 className="">Pricing Plan</h4>
          <h1 className="">Not Sure Which Plan Is For You?</h1>
          <p className="lh-lg w-75">
            Our pricing is flexible and tailored to each project. We cater to
            both UK and international clients, offering customized web solutions
            and a range of additional services, such as branding, graphic
            design, and social media management, based on the complexity and
            requirements of your project.
          </p>
        </div>

        <div className="pricing-bottom-div row justify-content-center align-items-start container-fluid border">
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4">
            <div
              className="pricing-card d-flex flex-column justify-content-center align-items-center gap-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="pricing-card-top text-center">
                <h3>Basic</h3>
                <h2>
                  <span className="pound-span-1">&pound;</span>
                  Starting from <br /> 500
                </h2>
              </div>
              <div className="pricing-card-bottom p-5">
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  Standard Website Design
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  Basic Branding Consultation
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  Basic Customer Support
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  SEO Setup
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  Social Media Setup Assistance
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-iconX" icon={faXmark} />
                  Graphic Design
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-iconX" icon={faXmark} />
                  Video Editing
                </p>
                <Link to="/routedcontact">
                  <button className="pricing-btn btn border">
                    Request a Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4">
            <div
              className="pricing-card d-flex flex-column justify-content-center align-items-center gap-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="pricing-card-top text-center">
                <div className="price-badge mobile-badge">
                  <span>Popular</span>
                </div>
                <h3 className="pricing-card-purple2">Standard</h3>
                <h2 className="pricing-card-purple2">
                  <span className="pound-span-2">&pound;</span>
                  Starting from <br /> 1,500
                </h2>
              </div>
              <div className="pricing-card-bottom p-5">
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  Custom Website Design
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  Comprehensive Branding Services
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  Priority Customer Support
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  SEO Optimization
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  Social Media Management
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  Basic Video Editing
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  Email Integration
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-iconX" icon={faXmark} />
                  E-commerce Support
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-iconX" icon={faXmark} />
                  Advanced Customizations
                </p>
                <Link to="/routedcontact">
                  <button className="pricing-btn btn border ">
                    Request a Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4">
            <div
              className="pricing-card d-flex flex-column justify-content-center align-items-center gap-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="pricing-card-top text-center">
                <h3 className="pricing-card-purple">Premium</h3>
                <h2 className="pricing-card-purple">
                  <span className="pound-span-3">&pound;</span>
                  Starting from <br /> 3,000
                </h2>
              </div>
              <div className="pricing-card-bottom p-5">
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  Fully Custom Website Design
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  Advanced Branding Solutions
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  24/7 Premium Support
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  Advanced SEO & Market Tools
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  E-commerce Integration
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  Social Media Campaigns
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  Professional Video Editing
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  Web & App Development
                </p>
                <p className="d-flex align-items-center gap-2">
                  <FontAwesomeIcon className="check-icon" icon={faCheck} />
                  Role-based Access
                </p>
                <Link to="/routedcontact">
                  <button className="pricing-btn btn border">
                    Request a Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
