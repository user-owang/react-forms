import React, {useState} from "react"
import Todo from "./Todo.jsx"
import NewTodoForm from "./NewTodoForm.jsx"

const TodoList = () => {
  const [tasks, setTasks] = useState([])

  const deleteTask = (id) => {
    setTasks(listOfTasks => (listOfTasks.filter((task) => (task.id !== id))))
  }

  const addTask = (task) => {
    setTasks(listOfTasks => ([...listOfTasks, task]))
  }
  
  return (
    <>
    <NewTodoForm addTask={addTask}/>
    {tasks.map((task) => <Todo key={task.id} id={task.id} task={task.task} deleteTask={deleteTask}/>)}
    </>
  )
}

export default TodoList