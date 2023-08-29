import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const baseUrl = "http://localhost:6001"
const plantsUrl = "http://localhost:6001/plants"

function PlantPage() {

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(plantsUrl)
    .then(res => res.json())
    .then(setPlants)
  }, [])

  function createNewPlant (event, newPlant) {
    event.preventDefault();
    newPlant.price = parseInt(newPlant.price);

    fetch(plantsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(data => setPlants([...plants, data]))
  }

  return (
    <main>
      <NewPlantForm createNewPlant={createNewPlant}/>
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;