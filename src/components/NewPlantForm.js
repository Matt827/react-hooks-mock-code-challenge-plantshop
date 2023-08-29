import React, {useState} from "react";

const initialState = {
  name: "",
  image: "",
  price: "",
}

function NewPlantForm({createNewPlant}) {
  const [plantForm, setPlantForm] = useState(initialState)

  function changePlantForm(event) {
    const {name, value} = event.target
    const updatedPlantForm = {...plantForm, [name]: value}
    setPlantForm(updatedPlantForm)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(event) => {
          createNewPlant(event, plantForm)
          setPlantForm(initialState)
          }}>
        <input onChange={changePlantForm} value={plantForm.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={changePlantForm} value={plantForm.image} type="text" name="image" placeholder="Image URL" />
        <input onChange={changePlantForm} value={plantForm.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;