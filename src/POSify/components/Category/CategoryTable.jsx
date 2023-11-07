import React, { useEffect } from 'react'
import { CategoryTableRow } from './CategoryTableRow'
import { usePosStore } from '../../../hooks/usePos'

const categories2 = [

    {   
        _id: 1,
        color: 'bg-red-500',
        name : 'Food'
    },
    {
        _id: 2,
        color: 'bg-indigo-500',
        name : 'Service'
    },
    {
        _id: 3,
        color: 'bg-green-500',
        name : 'Drink'
    }

]

export const CategoryTable = () => {

    const { categories , startLoadingCategories} = usePosStore()

    useEffect(() => {
        startLoadingCategories()

    }, [])
    
    return (
        <>
            <table className="mt-5 text-sm bg-white divide-y-2 divide-gray-200 min-w-max">



                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="w-10 px-4 py-2 font-medium text-left text-gray-900 left whitespace-nowrap">
                            <input
                                type="checkbox"
                                id="SelectAll"
                                className="w-5 h-5 border-gray-300 rounded"
                            />

                        </th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                            Name
                        </th>

                    </tr>
                </thead>

                <tbody>
                    {
                        categories.map((category) => (
                            <CategoryTableRow key={category.category} 
                            id={category._id}
                            color={category.color} category={category.name} />
                        ))
                    }
                </tbody>
            </table>


        </>
    )
}
