import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const renderPlants = plants.map(plantObj => {
    return <PlantCard 
      key={plantObj.id}
      plant={plantObj}
      />
  })

  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
