import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
      <section id="home">
        <footer className="container-fluid py-3">
          <div className="container d-flex flex-column flex-md-row align-items-center justify-content-start">
            <p className="footer-copyright d-flex justify-content-start align-items-center  gap-1 containe">
              <FontAwesomeIcon className="copyright-icon" icon={faCopyright} />
              <a href="#routed-header" className="text-nowrap">
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
