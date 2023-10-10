import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SideberSubItem = ({ items, visible }) => {

    const navigate = useNavigate()

    const onSubItem = (item) => {
        navigate(item.to)

    }

    return (
        <div data-testid="sub-menu" className={`${visible ? '' : 'hidden'} flex  py-2 flex-col ml-2 px-2    text-gray-400 rounded-md text-sm `}>

            {items.map((item, index) => (
                <span key={index} className="h-auto px-2 py-2 my-2 mb-1 font-medium transition-colors duration-300 transform rounded-md hover:bg-slate-700 hover:text-white"
                    onClick={() => onSubItem(item)}>{item.text}</span>
            ))}
        </div>
    )
}
