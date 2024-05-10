import {v4 as uuidv4} from "uuid"
import React, {useState} from "react";

const NewTodoForm = ({addTask}) => {
  const [formData, setFormData] = useState({id: uuidv4(), task: ""})

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    addTask(formData)
    setFormData({id: uuidv4(), task: ""})
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="task">Task</label>
      <input
        id="task"
        name="task"
        type="text"
        placeholder="task"
        value={formData.task}
        onChange={handleChange}
      />
      <button>Add task to Todo List</button>
    </form>
  )
}

export default NewTodoForm