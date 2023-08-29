import React from "react";
import PlantCard from "./PlantCard";
import PlantPage from "./PlantPage";

function PlantList({plants}) {

  const renderPlantCards = plants.map(plant => {
    return <PlantCard 
      key={plant.id}
      plant={plant} />
      // {...plant} />
  })

  return (
    <ul className="cards">{renderPlantCards}</ul>
  );
}

export default PlantList;
