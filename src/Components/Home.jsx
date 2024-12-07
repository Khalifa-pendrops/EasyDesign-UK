import React from "react";
import Header from "./Header";
import HomeHero from "./HomeHero";
import Services from "./Services";
import About from "./About";
import Features from "./Features";
import Pricing from "./Pricing";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import "./Style.css";

const Home = () => {
  return (
    <div className="container-fluid">
      <Header />
      <HomeHero />
      <About />
      <Services />
      <Features />
      <Pricing />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
