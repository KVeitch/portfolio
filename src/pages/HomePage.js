import React from "react";
import Hero from "../components/Hero"

const HomePage = ({ title, subTitle, text }) => {
  return (
    <Hero title={title} subTitle={subTitle} text={text} />
  );
};

export default HomePage;
