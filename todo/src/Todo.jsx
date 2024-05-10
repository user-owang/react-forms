import React from "react";


const Todo = ({id, task, deleteTask}) => {
  const deleteHandler = (e) => {
    e.preventDefault()
    deleteTask(id)
  }
  return(
    <div id={id}>
      <p>{task}</p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  )
}

export default Todo