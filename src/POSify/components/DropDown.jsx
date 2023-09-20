import React from 'react'
import { MdExpandMore } from "react-icons/md";

export const DropDown = ({ buttonLabel, anchorLabels }) => {
    return (
        <div className="relative inline-block ">
            <button className="relative z-10 flex items-center p-2 mx-4 my-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none">
            <p className='font-thin text-indigo-400'>{buttonLabel}: <span className="mx-1 text-gray-700">Todas las {buttonLabel}</span></p>
                <MdExpandMore className='w-5 h-5 mx-1' />
            </button>

            <div
                className="relative right-0 z-50 hidden py-2 mt-2 origin-top-right bg-gray-100 rounded-md shadow-xl sm:absolute hiddenw-48 "
            >
                {anchorLabels.map((label, index) => (
                    <a key={index} href="#" className="block px-4 py-3 mx-2 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-200 hover:rounded">
                        {label}
                    </a>
                ))}
            </div>
        </div>
    )
}
