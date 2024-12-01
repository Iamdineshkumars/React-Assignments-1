import React, { useReducer } from 'react'
import AddTodo from './AddTodo'
import Todo from './Todo'
const ListTodo = () => {
  
  const initial =[
    {id:1,title:"todo1",status:false},
    {id:2,title:"todo2",status:false},
    {id:3,title:"todo3",status:false}
  ]
  const reducerFunction=(state,action)=>{
    switch(action.type){
      case "Add": return [...state,{id: new Date(),title:action.payload,status:false}]
      case "UPDATE": return state.map((task) =>
         task.id === action.payload ? {...task,status:!task.status}:task
    );
    case "DELETE":return state.filter((task)=> task.id !== action.payload );
    default :
    return state;
  }
  }
  const [content,dispatch] = useReducer(reducerFunction,initial) 
  const updateTask = (id)=>{
    dispatch({type:"UPDATE",payload:id})
  }
  const deleteTask = (id)=>{
     dispatch({type:"DELETE",payload:id})
  }
  const addTask = (title)=>{
    dispatch({type:"Add",payload:title})
  }
  console.log(content)
  return (
    <div>
      <h1>Todo Application</h1>
      <AddTodo addTask={addTask}/>
      <ul>
        {content.map((todo)=>{
          return(
           <Todo key = {todo.id} todo={todo} updateTask={updateTask} deleteTask={deleteTask}/>
          )
        })}
      </ul>
    </div>
  )
}

export default ListTodo