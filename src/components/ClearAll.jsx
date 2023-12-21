import React from 'react'

const ClearAll = ({ clearAll }) => {
    return (
        <button
            onClick={() => clearAll()}
            className='px-4 text-white bg-violet-600 py-2 hover:bg-violet-800 hover:shadow-lg transition-all'>
            Clear All Tasks
        </button>
    )
}

export default ClearAll
