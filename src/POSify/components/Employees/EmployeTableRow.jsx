import React from 'react'
import { useNavigate } from 'react-router';

export const EmployeTableRow = ({ id, name, email, phoneNumber, role }) => {

    const navigate = useNavigate();

    const onNavigate = () => {

    }
    return (
        <>
            <tr>
                <td className="px-4 py-2">
                    <label className="sr-only">{`Row ${id}`}</label>
                    <input
                        className="w-5 h-5 border-gray-300 rounded"
                        type="checkbox"
                        id={`Row${id}`}
                    />
                </td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{name}</td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{email}</td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{phoneNumber}</td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{role}</td>
                <td className="px-4 py-2 whitespace-nowrap" onClick={()=>navigate(`/employees/list/id=${id}`)}>
                    <button
                        className="inline-block px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700"
                    >
                        View
                    </button>
                </td>
            </tr>
        </>
    )
}
