import React from 'react'
import { PosifyLayout } from '../../layout/PosifyLayout'

export const ItemPage = () => {
    return (
        <PosifyLayout>
            <div className="h-full max-h-screen p-6 overflow-x-auto border-gray-400 border-solid">
                <div className='shadow-2xl'>
                    <label
                        className="block px-3 py-2 overflow-hidden rounded-md shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                        <span className="text-xs font-medium text-gray-700"> Nombre </span>
                        <input
                            type="text"
                            className="w-full p-0 mt-1 border-none focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        />
                    </label>

                    <label
                        className="block px-3 py-2 overflow-hidden rounded-md shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                        <span className="text-xs font-medium text-gray-700"> Categoria </span>
                        <select

                            className="w-full p-0 mt-1 border-none focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        >

                            <option className='relative left-0' value="volvo">Food</option>

                        </select>
                    </label>

                    <div className='mt-3'>


                        <label className="sr-only">Order notes</label>

                        <div
                            className="overflow-hidden border border-gray-200 rounded-lg shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                        >
                            <textarea

                                className="w-full align-top border-none resize-none focus:ring-0 sm:text-sm"
                                rows="4"
                                placeholder="Drescription"
                            ></textarea>


                        </div>

                    </div>

                    

                </div>
            </div>
        </PosifyLayout>
    )
}
