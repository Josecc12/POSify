import React from 'react'
import { PosifyLayout } from '../../layout/PosifyLayout'


import { CategoryTable } from '../components/Category';
import { useNavigate } from 'react-router-dom';


export const CategoriesPage = () => {

    const navigate = useNavigate();

    return (
        <PosifyLayout>

            <div className="h-full max-h-screen p-6 overflow-x-auto border-gray-400 border-solid">


                <div className="flex flex-col flex-wrap justify-between w-full left-0flex sm:flex-row lg:flex-nowrap">

                    <button
                        className="inline-block w-full px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded sm:w-max hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        onClick={() => navigate('/articles/categories/id=?')}
                    >
                        Add Category
                    </button>


                    

                </div>



                <div className="w-full overflow-x-auto overflow-y-auto shadow-2xl lg:w-2/4">
                    <CategoryTable/>
                   
                </div>




            </div>

        </PosifyLayout>
    )
}
