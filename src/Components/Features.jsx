import React, { useState, useRef } from "react";
import useOnScreen from "./ScreenLoadSetup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import aboutus from "../assets/about-1.png";

function Features() {
  const ref = useRef();
  const isVisible = useOnScreen(ref, "0px");
  const [openDropdownIndex, setOpenDropdownIndex] = useState(0);
  const [isActive, setIsActive] = useState(0);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(index === openDropdownIndex ? null : index);
  };

  const handleClick = (index) => {
    setIsActive(index === isActive ? index : false);
  };

  const handleFocus = (index) => {
    setIsActive(index === isActive ? "true" : "false");
  };

  const handleBlur = (index) => {
    setIsActive(index === isActive ? "true" : "false");
  };

  const divsData = [
    {
      title: "Why choose Easy Design UK's Web Development Services?",
      contentTitle: "We provide high-performance, custom-tailored websites.",
      contentDescription: `At Easy Design UK, we focus on creating websites that not only look great but also function seamlessly. Our websites are designed with your business needs in mind, ensuring optimal performance, user experience, and scalability. We use the latest technologies to build sites that help you stand out in the digital landscape.
    Our expert team of developers and designers work collaboratively to bring your vision to life, ensuring the final product is tailored to your brand and audience.`,
    },
    {
      title: "Are there any hidden costs in your services?",
      contentTitle: "Transparency is key",
      contentDescription:
        "At Easy Design UK, we believe in clear and honest pricing. There are no hidden fees or surprise charges. Once we've discussed your project requirements, we provide a detailed quote outlining all costs involved. Any additional features or modifications will be discussed in advance, so you always know what to expect.",
    },
    {
      title: "What other services do you offer besides web development?",
      contentTitle: "A comprehensive suite of digital solutions.",
      contentDescription: {
        introText:
          "Easy Design UK offers a range of services to support your digital presence. This includes:",
        listItems: [
          {
            label: "Business Branding",
            description:
              "We help you establish a strong and memorable brand identity that resonates with your target audience.",
          },
          {
            label: "Graphic Design",
            description:
              "Our creative team delivers stunning graphics for various platforms, including print and digital media.",
          },
          {
            label: "Social Media Management",
            description:
              "We manage and grow your social media channels, creating engaging content and strategies to increase your online presence.",
          },
          {
            label: "Video Editing",
            description:
              "From promotional videos to tutorials, we provide professional video editing services to enhance your visual storytelling.",
          },
          {
            label: "Web & App Development",
            description:
              "In addition to websites, we develop custom applications tailored to your business needs.",
          },
        ],
      },
    },

    {
      title: "What sets your services apart from others?",
      contentTitle:
        "Innovation, customization, and dedication to client success.",
      contentDescription: `Easy Design UK stands out due to our commitment to innovation and attention to detail. Whether it's web development, branding, or social media management, we offer personalized solutions designed to meet your specific needs. Our approach combines cutting-edge technology, creative design, and a deep understanding of user behavior to help your business thrive in the digital world.
        We don’t just offer services; we build partnerships to ensure your long- term success online.`,
    },
  ];

  return (
    <div
      className="feature-main-container d-flex justify-content-center align-items-center gap-5"
      ref={ref}
      style={{
        minHeight: "100vh",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(100px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <section
        id="features"
        className="features-section container-xxl d-flex flex-sm-row flex-column  justify-content-center align-items-center"
      >
        <div className="feature-div-left border " data-aos="fade-left">
          {divsData.map((div, index) => (
            <div
              key={index}
              className="toggle-header-keyed"
              onClick={() => handleClick(index)}
              onFocus={() => handleFocus(index)}
              onBlur={() => handleBlur(index)}
              style={{
                boxShadow: isActive ? "0px 0px 0px 2px #bf8417" : "none",
              }}
            >
              <div
                className="toggle-header"
                onClick={() => toggleDropdown(index)}
                // onClick={handleClick}
                onFocus={() => handleFocus(index)}
                onBlur={() => handleBlur(index)}
                style={{
                  backgroundColor: isActive ? "rgb(254, 254, 193)" : "none",
                }}
              >
                <p className="h5-header">{div.title}</p>
                <span className="toggle-header-icon">
                  {openDropdownIndex === index ? (
                    <FontAwesomeIcon
                      className="colored-arrow"
                      icon={faAngleDown}
                    />
                  ) : (
                    <FontAwesomeIcon icon={faAngleUp} />
                  )}
                </span>
              </div>
              {openDropdownIndex === index && (
                <div className="dropdown-div">
                  <p className="dropdown-head-text">{div.contentTitle}</p>
                  {typeof div.contentDescription === "object" ? (
                    <>
                      <p className="dropdown-p-texts">
                        {div.contentDescription.introText}
                      </p>
                      <ul className="dropdown-p-texts-li">
                        {div.contentDescription.listItems.map((item, idx) => (
                          <li key={idx}>
                            <span className="labe-text-bold">
                              {item.label}:
                            </span>{" "}
                            {item.description}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p className="dropdown-p-texts">{div.contentDescription}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="">
          <img
            className="features-image animate-second"
            data-aos="fade-left"
            src={aboutus}
            alt="about image"
          />
        </div>
      </section>
    </div>
  );
}

export default Features;
