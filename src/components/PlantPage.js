import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const plantUrl = "http://localhost:6001/plants"

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
  const [stock, setStock] = useState([])
  

  useEffect(() => {
    fetch(plantUrl)
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])

  function submitNewPlant(event, newPlant) {
    event.preventDefault()
    newPlant.price = parseInt(newPlant.price)

    fetch(plantUrl, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" ,
        "accepts": "application/json",
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(data => setPlants([...plants, data]))
  }
  
  function searchBar(event) {
    setSearch(event.target.value)
  }

  const filterPlants = plants.filter(plant => plant.name.toLowerCase().includes(search))

  function changeStock (plantId) {
    setStock([...stock, plantId])
  }

  return (
    <main>
      <NewPlantForm submitNewPlant={submitNewPlant}/>
      <Search searchBar={searchBar}/>
      <PlantList
        changeStock={changeStock}
        stock={stock}
        plants={filterPlants} />
    </main>
  );
}

export default PlantPage;
