import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
      <footer className="container-fluid d-flex align-items-center py-3">
        <p className="footer-copyright d-flex align-items-center gap-2 container-lg">
          <FontAwesomeIcon className="copyright-icon" icon={faCopyright} />
          <a href="#home">Easy Design UK, </a>
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
