import React, { useState } from 'react'

const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task)

    const editTodoAction = e => {
        e.preventDefault()

        editTodo(value, task.id)
        setValue("")
    }

    return (
        <div className='w-full'>
            <form onSubmit={editTodoAction} action="" className='w-full flex justify-center'>
                <input value={value} onChange={e => setValue(e.target.value)} placeholder='Update Task' type="text" className='grow bg-transparent border border-violet-600 text-white md:px-4 p-1 md:py-2 focus:outline-none' />
                <button type='submit' className='text-sm px-3 md:px-6 p-1 bg-violet-600 text-white'>Update Task</button>
            </form>
        </div>
    )
}

export default EditTodoForm
