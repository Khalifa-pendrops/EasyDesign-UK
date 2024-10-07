import React from "react";
// import React, { lazy, Suspense } from "react";
import Header from "./Header";
import HomeHero from "./HomeHero";
import Services from "./Services";
import About from "./About";
import Features from "./Features";
import "./Style.css";

// const HomeHero = lazy(() => import("./HomeHero"));
// const About = lazy(() => import("./About"));
// const Services = lazy(() => import("./Services"));
// const Features = lazy(() => import("./Features"));
// const Pricing = lazy(() => import("./Pricing"));
// const ContactUs = lazy(() => import("./ContactUs"));
// const Footer = lazy(() => import("./Footer"));

const Home = () => {
  return (
    <div>
      <Header />
      <HomeHero />
      <About />
      <Services />
      <Features />
      {/* <Suspense fallback={<div>Loading About...</div>}>
        <HomeHero />
      </Suspense>
      <Suspense fallback={<div>Loading About...</div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div>Loading Services...</div>}>
        <Services />
      </Suspense>
      <Suspense fallback={<div>Loading Features...</div>}>
        <Features />
      </Suspense>
      <Suspense fallback={<div>Loading Pricing...</div>}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<div>Loading Contact-us...</div>}>
        <ContactUs />
      </Suspense>
      <Suspense fallback={<div>Loading Contact-us...</div>}>
        <Footer />
      </Suspense> */}
    </div>
  );
};

export default Home;
