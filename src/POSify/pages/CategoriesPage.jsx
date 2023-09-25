import React from 'react'
import { PosifyLayout } from '../../layout/PosifyLayout'

import { AiOutlineSearch } from "react-icons/ai";
import { CategoryTable } from '../components/Category';


export const CategoriesPage = () => {
    return (
        <PosifyLayout>

            <div className="h-full max-h-screen p-6 overflow-x-auto border-gray-400 border-solid">


                <div className="flex flex-col flex-wrap justify-between w-full left-0flex sm:flex-row lg:flex-nowrap">

                    <button
                        className="inline-block w-full px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded sm:w-max hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    >
                        Add Category
                    </button>


                    <div className='flex flex-col-reverse sm:flex-row '>
                 

                        <div className='flex flex-row-reverse justify-end my-4'>
                            <input type="text" className='self-center w-full mx-2 text-sm text-gray-700 border-indigo-500 rounded h-7' />
                            <AiOutlineSearch className='self-center text-2xl text-indigo-600' />
                        </div>


                    </div>

                </div>



                <div className="w-full overflow-x-auto overflow-y-auto shadow-2xl lg:w-2/4">
                    <CategoryTable/>
                   
                </div>




            </div>

        </PosifyLayout>
    )
}
