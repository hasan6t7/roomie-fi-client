import React from "react";
import FrPost from "../Components/FrPost";
import { Fade } from "react-awesome-reveal";
import Hero from "../Components/Hero";
import HowItWorks from "../Components/HowItWorks";
import WhyUse from "../Components/WhyUse";
// import LottieAnimation from "../Components/LottieAnimation";
import Services from "../Components/Services";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical"  />
      </Helmet>
      <div>
        <Fade cascade>
          <Hero></Hero>
          <HowItWorks></HowItWorks>
          {/* <LottieAnimation></LottieAnimation> */}
          <FrPost></FrPost>
          <WhyUse></WhyUse>
          <Services></Services>
        </Fade>
      </div>

      <div></div>
    </div>
  );
};

export default Home;
