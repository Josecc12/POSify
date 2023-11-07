import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CategoryTableRow = ({ id, color, category }) => {

  const navigate = useNavigate()

 

    

  return (
    <>
      <tr>
        <td className="px-4 py-2" >
          <label className="sr-only">1</label>
          <input
            className="w-5 h-5 border-gray-300 rounded"
            type="checkbox"

          />
        </td>

        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap" onClick={() => navigate(`/articles/categories/id=${id}`)}>

          <div className="flex items-center gap-x-2">
            <div className={`object-cover w-10 h-10 ${color}
             rounded-full `}></div>
            <div>
              <h2 className="font-medium text-gray-800 dark:text-white ">{category}</h2>

            </div>

          </div>
        </td>
      </tr>


    </>
  )
}
