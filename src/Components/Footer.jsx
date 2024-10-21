import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
      <footer className="container-fluid py-3">
        <div className="container-lg d-flex flex-column flex-md-row align-items-center justify-content-between">
          <p className="footer-copyright d-flex align-items-center gap-2">
            <FontAwesomeIcon className="copyright-icon" icon={faCopyright} />
            <a href="#home">Easy Design UK,</a>
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
