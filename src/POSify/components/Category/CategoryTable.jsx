import React from 'react'
import { CategoryTableRow } from './CategoryTableRow'

const categories = [

    {
        color: 'bg-red-500',
        category : 'Food'
    },
    {
        color: 'bg-indigo-500',
        category : 'Service'
    },
    {
        color: 'bg-green-500',
        category : 'Drink'
    }

]

export const CategoryTable = () => {
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
                            <CategoryTableRow key={category.category} color={category.color} category={category.category} />
                        ))
                    }
                </tbody>
            </table>


        </>
    )
}
