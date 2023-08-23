import React, { useState } from "react";

function PlantCard({plant}) {

  const [isSold, setIsSold] = useState(true)
  const {image, price, name} = plant

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isSold ? (
        <button onClick={() => {setIsSold(false)}} className="primary">In Stock</button>
      ) : (
        <button onClick={() => {setIsSold(true)}}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
