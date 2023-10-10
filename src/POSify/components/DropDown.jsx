import React, { useEffect, useState } from 'react'
import { MdExpandMore } from "react-icons/md";
import { usePosStore } from '../../hooks/usePos';

export const DropDown = ({ buttonLabel, anchorLabels, filterName }) => {

    const [isDrop, setIsDrop] = useState(false)

    const { setInventoryFilter, inventoryFilters } = usePosStore()

    const onLabel = (label) => {
        
        if(label=='Todas') {
            setInventoryFilter(filterName, 'All')
        }
        else{
        
        setInventoryFilter(filterName, label)
        }

        setIsDrop(!isDrop)
       
    }

  

    const [filterLabel, setFilterLabel] = useState(`Todas las ${buttonLabel}s`)


    useEffect(() => {
        if (inventoryFilters[filterName] !== 'All') {
            setFilterLabel(inventoryFilters[filterName]);
        } else {
            setFilterLabel(`Todas las ${buttonLabel}s`);
        }
    }, [inventoryFilters, filterName, buttonLabel]);


    return (
        <div className="relative inline-block ">
            <button onClick={() => setIsDrop(!isDrop)} className="relative z-10 flex items-center p-2 mx-4 my-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none">
                <p className='font-thin text-indigo-400'>{buttonLabel}: <span className="mx-1 text-gray-700">
                    {filterLabel}</span></p>
                <MdExpandMore className='w-5 h-5 mx-1' />
            </button>

            <div
                className={`${isDrop ? '' : 'hidden'} relative right-0 z-50  py-2 mt-2 origin-top-right bg-gray-200 rounded-md shadow-xl sm:absolute hiddenw-48 `}
            >
                {anchorLabels.map((label, index) => (
                    <p key={index} className="block px-4 py-3 mx-2 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-300 hover:rounded" onClick={() => onLabel(label)}  >
                        {label}
                    </p>
                ))}
            </div>
        </div>
    )
}
