import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Components/Home";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/routedcontact" element={<RoutedContactPage />} /> */}
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
