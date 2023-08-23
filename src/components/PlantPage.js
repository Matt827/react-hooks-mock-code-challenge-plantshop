import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const url = "http://localhost:6001/plants"
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(setPlants)
  }, [])

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList 
        plants={plants}
        url={url}/>
    </main>
  );
}

export default PlantPage;
