import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useReducer } from 'react'
import ListTodo from './ListTodo'
const AddTodo = ({addTask}) => {
  const [state,setState] = useState("")
 
  const handleSubmit=()=>{
     addTask(state)
  }
  return (
    <div>
        <h3>TO-DO</h3>
        
        <input type='text' placeholder='add todos' onChange={(event)=>setState(event.target.value)}/>
        <button onClick={handleSubmit}>Add</button>
      
    </div>
  )
}

export default AddTodo