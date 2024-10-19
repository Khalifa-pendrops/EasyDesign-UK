import React, { useRef } from "react";
import useOnScreen from "./ScreenLoadSetup";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPaintbrush,
  faMobileScreen,
  faMagnifyingGlass,
  faChartLine,
  faServer,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  const ref = useRef();
  const isVisible = useOnScreen(ref, "-100px");
  return (
    <div
      className="section-container-main container-fluid d-flex justify-content-center align-items-center"
      ref={ref}
      style={{
        minHeight: "100vh",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(100px)",
        transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
      }}
    >
      <section
        id="services"
        className="services-section container d-flex flex-column justify-content-center align-items-center text-center"
      >
        <div
          className="home-service-head d-flex flex-column justify-content-center align-items-center"
          data-aos="fade-up"
        >
          <h4 className="display-6">Our Services</h4>
          <h1 className="display-3">What We Can Do For You</h1>
          <p className="lh-lg w-50">
            At Easy Design UK, we provide a range of digital solutions tailored
            to elevate your business. Our expertise spans from web development
            to digital marketing, ensuring your brand reaches its full potential
            online.
          </p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center gap-4 my-5">
          <div className="services-container row g-0 ">
            <div
              className="web-dev-div border d-flex  container-fluid flex-column justify-content-center align-items-center p-4 rounded gap-2 col-12 col-md-6 col-lg-4 col-xxl-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon-div border p-5 bg-warning rounded">
                <FontAwesomeIcon className="icon fs-1" icon={faCode} />
              </div>
              <h3 className="fs-4 text-center w-100">Web Development</h3>
              <p className="services-p text-center">
                We build responsive and dynamic websites that deliver a seamless
                user experience across all devices.
              </p>
              <Link to="/routedcontact">
                <button className="services-btn btn bg-warning text-white">
                  Contact Us
                </button>
              </Link>
            </div>

            <div
              className="ui-ux-div border d-flex flex-column justify-content-center align-items-center p-4 rounded gap-2 col-12 col-md-6 col-lg-4 col-xxl-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon-div border p-5 bg-warning rounded">
                <FontAwesomeIcon className="icon fs-1" icon={faPaintbrush} />
              </div>
              <h3 className="fs-4 text-center w-100">UI/UX Design</h3>
              <p className="services-p text-center">
                Creating visually appealing and intuitive designs to enhance
                user interaction and engagement on your website.
              </p>
              <Link to="/routedcontact">
                <button className="services-btn btn bg-warning text-white">
                  Contact Us
                </button>
              </Link>
            </div>

            <div
              className="mobile-dev-div border d-flex flex-column justify-content-center align-items-center p-4 rounded gap-2 col-12 col-md-6 col-lg-4 col-xxl-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon-div border p-5 bg-warning rounded">
                <FontAwesomeIcon className="icon fs-1" icon={faMobileScreen} />
              </div>
              <h3 className="fs-4 text-center w-100">Mobile App Development</h3>
              <p className="services-p text-center">
                Developing mobile applications that offer a robust and engaging
                user experience on both iOS and Android platforms.
              </p>
              <Link to="/routedcontact">
                <button className="services-btn btn bg-warning text-white">
                  Contact Us
                </button>
              </Link>
            </div>

            <div
              className="design-div border d-flex flex-column justify-content-center align-items-center p-4 rounded gap-2 col-12 col-md-6 col-lg-4 col-xxl-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="icon-div border p-5 bg-warning rounded">
                <FontAwesomeIcon className="icon fs-1" icon={faMobileScreen} />
              </div>
              <h3 className="fs-4 text-center w-100">Responsive Design</h3>
              <p className="services-p text-center">
                Mobile-first designs that look great on any device, ensuring a
                seamless experience across platforms.
              </p>
              <Link to="/routedcontact">
                <button className="services-btn btn bg-warning text-white">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          <div className="services-container row g-0">
            <div
              className="seo-div border d-flex flex-column justify-content-center align-items-center p-4 rounded gap-2 col-12 col-md-6 col-lg-4 col-xxl-3"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="icon-div border p-5 bg-warning rounded">
                <FontAwesomeIcon
                  className="icon fs-1"
                  icon={faMagnifyingGlass}
                />
              </div>
              <h3 className="fs-4 text-center w-100">SEO Optimization</h3>
              <p className="services-p text-center">
                Optimizing your website to improve search engine rankings and
                increase organic traffic to your site.
              </p>
              <Link to="/routedcontact">
                <button className="services-btn btn bg-warning text-white">
                  Contact Us
                </button>
              </Link>
            </div>

            <div
              className="digital-marketing-div border d-flex flex-column justify-content-center align-items-center p-4 rounded gap-2 col-12 col-md-6 col-lg-4 col-xxl-3"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="icon-div border p-5 bg-warning rounded">
                <FontAwesomeIcon className="icon fs-1" icon={faChartLine} />
              </div>
              <h3 className="fs-4 text-center w-100">Digital Marketing</h3>
              <p className="services-p text-center">
                Implementing effective digital marketing strategies to increase
                your online visibility and drive conversions.
              </p>
              <Link to="/routedcontact">
                <button className="services-btn btn bg-warning text-white">
                  Contact Us
                </button>
              </Link>
            </div>

            <div
              className="hosting-div border d-flex flex-column justify-content-center align-items-center p-4 rounded gap-2 col-12 col-md-6 col-lg-4 col-xxl-3"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="icon-div border p-5 bg-warning rounded">
                <FontAwesomeIcon className="icon fs-1" icon={faServer} />
              </div>
              <h3 className="fs-4 text-center w-100">
                Web Hosting & Maintenance
              </h3>
              <p className="services-p text-center">
                Providing reliable hosting services and ongoing maintenance to
                ensure your website runs smoothly.
              </p>
              <Link to="/routedcontact">
                <button className="services-btn btn bg-warning text-white">
                  Contact Us
                </button>
              </Link>
            </div>

            <div
              className="performance-div border d-flex flex-column justify-content-center align-items-center p-4 rounded gap-2 col-12 col-md-6 col-lg-4 col-xxl-3"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="icon-div border p-5 bg-warning rounded">
                <FontAwesomeIcon className="icon fs-1" icon={faRocket} />
              </div>
              <h3 className="fs-4 text-center w-100">Optimized Performance</h3>
              <p className="services-p text-center">
                Websites optimized for speed and SEO, ensuring fast load times
                and top search engine rankings.
              </p>
              <Link to="/routedcontact">
                <button className="services-btn btn bg-warning text-white">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
