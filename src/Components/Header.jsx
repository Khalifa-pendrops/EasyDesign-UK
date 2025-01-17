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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const reloadPage = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-position container-fluid d-flex justify-content-center align-items-center  ${
        scrolled ? "fixed-position-scrolled" : "bg-transparent"
      }`}
    >
      <div className="container px-4 ">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="logo"
            width="60px"
            onClick={() => window.location.reload()}
          />
        </Link>

        <button
          className="navbar-toggler "
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
          className="toggle-menu collapse navbar-collapse overflow-hidden"
          id="main-nav"
        >
          <ul className="navbar-nav ms-auto overflow-hiddden d-flex justify-content-center align-items-start">
            <li className="nav-item" onClick={reloadPage}>
              <Link to="/" className="nav-link fs-5">
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
              <Link to="/routedcontact" className="nav-link fs-5">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
