import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (value !== "") {
            addTodo(value)
            console.log(value)
            setValue("")
        }
    }

    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit} action="" className='w-full flex justify-center'>
                <input value={value} onChange={e => setValue(e.target.value)} placeholder='What is the task today?' type="text" className='grow bg-transparent border border-violet-600 text-white md:px-4 p-1 md:py-2 focus:outline-none' />
                <button type='submit' className='text-sm px-3 md:px-6 p-1 bg-violet-600 text-white hover:bg-violet-800 hover:shadow-lg transition-all'>Add Task</button>
            </form>
        </div>
    )
}

export default TodoForm
