import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Components/Home";
import RoutedContactPage from "./Components/RoutedContactPage";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routedcontact" element={<RoutedContactPage />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
