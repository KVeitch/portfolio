import React from "react";

const HomePage = ({ title, subtitle, text }) => {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle}
      <p>{text}</p>
    </div>
  );
};

export default HomePage;
