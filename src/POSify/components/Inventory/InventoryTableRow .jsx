import React from 'react'
import { useNavigate } from 'react-router-dom'

export const InventoryTableRow = ({ id, name, category, price, cost, utility, stock }) => {

    const navigate = useNavigate()
    return (
        <tr onClick={()=>navigate(`/articles/list/id=${id}`)}>
            <td className="px-4 py-2">
                <label className="sr-only">{`Row ${id}`}</label>
                <input
                    className="w-5 h-5 border-gray-300 rounded"
                    type="checkbox"
                    id={`Row${id}`}
                />
            </td>
            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{name}</td>
            <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{category}</td>
            <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{price}</td>
            <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{cost}</td>
            <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{utility}</td>
            <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{stock}</td>
            <td className="px-4 py-2 whitespace-nowrap">
                <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700"
                >
                    View
                </a>
            </td>
        </tr>
    )
}
