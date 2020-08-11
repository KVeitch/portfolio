import React from "react";

import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

const HomePage = ({ title, subTitle, text }) => {
  return (
    <>
      <Hero title={title} subTitle={subTitle} text={text} />
      <Carousel />
    </>
  );
};

export default HomePage;
