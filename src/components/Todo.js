import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTasks } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { EditTodoForm } from './EditTodoForm'
export const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={()=>toggleComplete(task.id)} className={`$task.completed ? completed 'completed':" "}`}> {task.task}</p>
      <div>
<FontAwesomeIcon icon={faPenToSquare} onClick={()=> editTodo(task.id)}/>
<FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)} />
      </div>
    </div>
  )
}
