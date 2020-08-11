import React from 'react'

import CardInfo from "./CardInfo"

const Card = ({item, click}) => {
  return(
    <div className="d-inline-block p-card" onClick={(e) => click(item)}>
      <img className="p-card-image" src={item.imgSrc} alt={item.imgSrc} />
      { item.selected && <CardInfo title={item.title} subTitle={item.subTitle} link={item.link} /> }
    </div>
  );
}

export default Card
