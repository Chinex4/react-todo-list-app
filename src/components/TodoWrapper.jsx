import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'
import EditTodoForm from './EditTodoForm'
uuidv4()

const TodoWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTodo = (value) => {
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                task: value,
                completed: false,
                isEditing: false
            }
        ])

        console.log(todos)
    }

    const toggleCompleted = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo,
            completed: !todo.completed
        }
            : todo
        ))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTask = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo,
            isEditing: !todo.isEditing
        }
            : todo
        ))
    }

    const editTodo = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo,
            task,
            isEditing: !todo.isEditing
        }
            : todo
        ))
    }


    return (
        <div className='w-[350px] h-auto md:w-[600px] px-4 md:px-10 py-8 shadow-xl bg-[#1a1a40] rounded-2xl space-y-8'>
            <h1 className='text-4xl text-white text-center font-bold'>Get Things Done!</h1>
            <TodoForm addTodo={addTodo} />
            <div className='space-y-4'>
                {
                    todos.map((todo, index) => (
                        todo.isEditing ? (
                            <EditTodoForm task={todo} key={index} editTodo={editTodo} />
                        ) : (
                            <Todo task={todo} key={index} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} editTodo={editTask} />
                        )
                    ))
                }
            </div>

        </div>
    )
}

export default TodoWrapper
