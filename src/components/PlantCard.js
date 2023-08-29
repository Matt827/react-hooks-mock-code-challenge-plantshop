import React from "react";

function PlantCard({id, name, image, price, changeStock, stock}) {

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>

      {!stock.includes(id) ? (
        // true
        <button  onClick={() => changeStock(id)} className="primary">In Stock</button>
      ) : (
        // false
        <button onClick={() => changeStock(id)} >Out of Stock</button>
      )}
      
    </li>
  );
}

export default PlantCard;
