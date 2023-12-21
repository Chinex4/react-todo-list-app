import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoWrapper from './components/TodoWrapper'

function App() {

  return (
    <>
      <div className='w-full min-h-screen bg-violet-600 flex justify-center items-center'>
        <TodoWrapper />
      </div>
    </>
  )
}

export default App
