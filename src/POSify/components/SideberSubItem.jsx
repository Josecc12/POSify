import React from 'react'

export const SideberSubItem = ({ items , visible ='' }) => {

    const onSubItem = (item) =>{
        //TODO: navigate to page
        console.log(item)
    }

    return (
        <div className={`${visible} flex  py-2 flex-col ml-2 px-2    text-gray-400 rounded-md text-sm `}>

            {items.map((item, index) => (
                <span key={index} className="my-2 h-auto py-2 px-2 font-medium mb-1  transition-colors duration-300 transform rounded-md hover:bg-slate-700 hover:text-white"
                onClick={()=>onSubItem(item)}>{item}</span>
            ))}
        </div>
    )
}
