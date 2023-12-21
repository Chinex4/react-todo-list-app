import React from 'react'

const MarkAsRead = ({ tasks, clearAll }) => {
    return (
        <button
            onClick={() => clearAll()}
            className='px-4 text-white bg-violet-600 py-2'>
            Mark all as Read
        </button>
    )
}

export default MarkAsRead
