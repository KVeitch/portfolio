import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

const AboutPage = ({ title }) => {
  return (
    <div>
      <Hero title={title} />
      <Content>
        <p>
          Hello, my name is Kirk. As former engineer and public school educator,
          I have always been drawn to math, physics, and the science and art of
          creating things. Putting all those pieces together, I graduated with a
          Bachelor of Science in Mechanical Engineering. I enjoyed being an
          educator at charter school and being a part of a small engineering
          firm, where I worked in a variety of team roles. I always found myself
          being pulled towards technology and programming. As my professional
          experience grew, I began to see how I could leverage my engineering,
          teaching, and problem solving background in new ways. This lead me to
          the Turing School of Software and Design where I honed the skills
          necessary to be part of a dynamic software development team.
        </p>
      </Content>
    </div>
  );
};

export default AboutPage;
