import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Todo = ({ task, toggleCompleted, editTodo, deleteTodo }) => {
    return (
        <div className='max-w-full whitespace-normal bg-violet-600 py-4 px-4 rounded flex justify-between items-center'>
            <div className='flex space-x-3 items-center'>
                <input onClick={() => toggleCompleted(task.id)} type="checkbox" className='w-4 h-4 text-violet-600'/>
                <p
                    className={
                        `${task.completed ? 'text-slate-400 font-semibold line-through cursor-pointer'
                            : 'text-white font-semibold cursor-pointer'}`
                    }
                >{task.task}</p>
            </div>

            <div className='space-x-3'>
                <FontAwesomeIcon onClick={() => editTodo(task.id)} className='text-white cursor-pointer' icon={faPenToSquare} />
                <FontAwesomeIcon onClick={() => deleteTodo(task.id)} className='text-white cursor-pointer' icon={faTrash} />
            </div>
        </div>
    )
}

export default Todo
