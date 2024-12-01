import React from 'react'

const Todo = ({todo,updateTask,deleteTask}) => {
    console.log(todo)
  return (
    <div>
        <li>
            <span>{todo.title}</span>
            <span>-{todo.status ? "DONE":"UNDONE"}</span>
            <button onClick={()=>updateTask(todo.id)}>{todo.status ? "undo":"complete"}</button>
            <button onClick={()=>deleteTask(todo.id)}>delete</button>
        </li>
    </div>
  )
}

export default Todo