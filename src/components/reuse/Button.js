import React from 'react'

const Button = ({ label,onClick }) => {
    return (
        <>
            <a
                className='rounded-md bg-indigo-600 px-3.5 w-52 cursor-pointer py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                onClick={onClick}
            >
                {label}
                </a>
        </>
    )
}

export default Button