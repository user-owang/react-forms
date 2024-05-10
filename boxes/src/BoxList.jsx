import React, {useState} from "react"
import Box from "./Box.jsx"
import NewBoxForm from "./NewBoxForm.jsx"

const BoxList = () => {
  const [boxes, setBoxes] = useState([])

  const addBoxForm = (box) => {
    setBoxes(listOfBoxes => ([...listOfBoxes, box]))
  }
  return (
    <>
    <NewBoxForm addBoxForm={addBoxForm}/>
    {boxes.map((box, i) => <Box key={i} style={box}/>)}
    </>
  )
}

export default BoxList