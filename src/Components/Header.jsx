import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  // const [activeIndex, setActiveIndex] = useState(null);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // const handleActive = (index) => {
  //   setIsActive(index);
  // };

  useEffect(() => {
    //this is the setup for the event listener on mount component
    window.addEventListener("scroll", handleScroll);
    return () => {
      //this will remove event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" bg-transparent">
      <nav className="navbar navbar-expand-sm">
        <div className="container-xxl">
          <a href="#home" className="navbar-brand">
            <img src={logo} alt="logo" width="60px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end align-center d-lg-none "
            id="main-nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link fs-5" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <Link top="/routedcontact" className="links nav-link fs-5">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
