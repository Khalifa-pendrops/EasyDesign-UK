import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    //this is the setup for the event listener when this component mounts
    window.addEventListener("scroll", handleScroll);
    return () => {
      //this will remove event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed-position ${
        scrolled ? "fixed-position-scrolled" : "bg-transparent"
      }`}
    >
      <nav className="navbar navbar-expand-sm">
        <div className="container-xxl">
          <Link to="/" className="links nav-link fs-5">
            <img src={logo} alt="logo" width="60px" />
          </Link>
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
                <Link to="/" className="links nav-link fs-5">
                  Home
                </Link>
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
                <Link to="/routedcontact" className="links nav-link fs-5">
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
