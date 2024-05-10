import React, {useState} from "react";

const NewBoxForm = ({addBoxForm}) => {
  const [formData, setFormData] = useState({width: "", height: "", backgroundColor: ""})
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }
  const submitHandler = (e) => {
    e.preventDefault()
    addBoxForm(formData)
    setFormData({width: "", height: "", backgroundColor: ""})
  }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="width">Width</label>
      <input
        id="width"
        name="width"
        type="text"
        placeholder="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height</label>
      <input
        id="height"
        name="height"
        type="text"
        placeholder="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="backgroundColor">Color</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        type="text"
        placeholder="color"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button>Make new box</button>
    </form>
  )
}

export default NewBoxForm