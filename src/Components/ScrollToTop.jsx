import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
// import { faArrowUp } from "@fortawesome/free-brands-svg-icons";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  //THIS FUNCTION WILL SHOW BUTTON WHEN THE PAGE IS SCROLLED
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  //THIS FUNCTION SCROLLS THE USER TO THE top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //THIS EVENT LISTENER LISTENS TO SCROLL EVENTS
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-btn"
          aria-label="Scroll To Top"
        >
          <FontAwesomeIcon className="scroll-icon" icon={faArrowUp} />
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
