import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, changeStock, stock}) {
  const renderPlantCards = plants.map((plant) => {
    return <PlantCard 
      key={plant.id}
      {...plant}
      changeStock={changeStock} 
      stock={stock}
      />
  })

  return (
    <ul className="cards">{renderPlantCards}</ul>
  );
}

export default PlantList;
