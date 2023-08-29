import React, {useState} from "react";

const initial = {
  name: "",
  image: "",
  price: "",
}

function NewPlantForm({submitNewPlant}) {
  const [newPlant, setNewPlant] = useState(initial);

  function changePlantForm(event) {
    const {name, value} = event.target
    setNewPlant({...newPlant, [name]: value})
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(event) => {
        submitNewPlant(event, newPlant)
        setNewPlant(initial)
        }}>
        <input onChange={changePlantForm} value={newPlant.name}type="text" name="name" placeholder="Plant name" />
        <input onChange={changePlantForm} value={newPlant.image}type="text" name="image" placeholder="Image URL" />
        <input onChange={changePlantForm} value={newPlant.price}type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
