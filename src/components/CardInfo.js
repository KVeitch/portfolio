import React from "react";
import { useSpring, animated } from 'react-spring';

const CardInfo = ({title, subTitle, link}) => {
  const style = useSpring({opacity: 1, from: {opacity: 0}});

  return (
    <animated.div className="p-card-info" style={style}>
      <p className="p-card-title">{title}</p>
      <p className="p-card-sub-title">{subTitle}</p>
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View the code
        </a>
      </div>
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View the site
        </a>
      </div>
    </animated.div>
  );
};

export default CardInfo;
