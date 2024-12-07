import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
      <section id="home">
        <footer className="container-fluid py-3">
          <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-center">
            <p className="footer-copyright d-flex justify-content-start align-items-center  gap-1 containe">
              <FontAwesomeIcon className="copyright-icon" icon={faCopyright} />
              <a href="/" className="text-nowrap">
                Easy Design UK,
              </a>
              All rights reserved.
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Footer;
