import React, { useState } from 'react'
import { PosifyLayout } from '../../layout/PosifyLayout'
import { AiOutlineCheck } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

export const CategoryPage = () => {

  const [selectedDiv, setSelectedDiv] = useState(null);

  const navigate = useNavigate();

  const onDivClick = (index) => {
    setSelectedDiv(index);
  };

  const divs = [
    'bg-slate-600',
    'bg-indigo-600',
    'bg-red-600',
    'bg-green-600',
    'bg-orange-500',
    'bg-yellow-300',
    'bg-teal-600',
    'bg-blue-600',
  ];



  return (
    <PosifyLayout>
      <div className="h-full max-h-screen p-6 overflow-x-auto border-gray-400 border-solid">
        <div className='w-full p-5 shadow-2xl lg:w-4/6'>


          <label

            className="relative block border border-gray-200 rounded-md shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          >
            <input
              type="text"

              className="placeholder-transparent bg-transparent border-none peer focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Category"
            />

            <span
              className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
              Name for the category
            </span>
          </label>

          <div className='flex flex-wrap gap-2 m-4'>
            {divs.map((divClass, index) => (
              <div
                key={index}
                className={`flex items-center justify-center w-16 h-16 ${divClass} ${index === selectedDiv ? 'border-2 border-blue-600' : ''}`}
                onClick={() => onDivClick(index)}
              >
                {index === selectedDiv && (
                  <AiOutlineCheck className='text-2xl font-bold text-white' />
                )}
              </div>
            ))}
          </div>

          <div className='flex justify-end'>
            <button
              className="inline-block w-3/6 px-3 py-3 ml-2 text-sm font-medium text-white border rounded border-slate-600 bg-slate-600 sm:w-1/6 hover:bg-transparent hover:text-slate-600 focus:outline-none focus:ring active:text-slate-500"
              onClick={() => navigate(-1)} >
              Cancel
            </button>

            <button
              className="inline-block w-3/6 px-3 py-3 ml-2 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded sm:w-1/6 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              Save
            </button>
          </div>

        </div>
      </div>
    </PosifyLayout>
  )
}
