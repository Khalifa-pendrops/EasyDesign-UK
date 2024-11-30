import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Components/Home";
import RoutedContactPage from "./Components/RoutedContactPage";
import ScrollToTop from "./Components/ScrollToTop";
// import SubmissionErrorPage from "./Components/SubmissionErrorPage";
// import SubscriptionErrorPage from "./Components/SubscriptionErrorPage";
// import SubmissionSuccessPage from "./Components/SubmissionSuccessPage";
// import SubscribeSuccessPage from "./Components/SubmissionSuccessPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routedcontact" element={<RoutedContactPage />} />
        {/* <Route path="/submit-success" element={<SubmissionSuccessPage />} />
        <Route path="/subscribe-success" element={<SubscribeSuccessPage />} />
        <Route path="/submit-error" element={<SubmissionErrorPage />} />
        <Route path="/subscribe-error" element={<SubscriptionErrorPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
