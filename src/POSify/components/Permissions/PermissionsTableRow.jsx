import React from 'react'
import { useNavigate } from 'react-router-dom'

export const PermissionsTableRow = ({id, name ,acces,employees}) => {

  const navigate = useNavigate();

  return (
    <tr onClick={()=>navigate(`/role-detail/id=${id}`)}>
      <td className="px-4 py-2" >
        <label className="sr-only">1</label>
        <input
          className="w-5 h-5 border-gray-300 rounded"
          type="checkbox"

        />
      </td>

      <td className="w-2/4 px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap" >

        <div className="flex items-center gap-x-2">
          <div className={`object-cover w-10 h-10 rounded-full bg-orange-400 `}></div>
          <div>
            <h2 className="font-medium text-gray-800 dark:text-white ">{name}</h2>

          </div>

        </div>
      </td>

      <td className="px-4 py-2 text-left gray-700 tex-ce whitespace-nowrap">--</td>

      <td className="px-4 py-2 text-right text-gray-700 whitespace-nowrap">--</td>

    </tr>
  )
}



