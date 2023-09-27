import React from 'react'

export const StoreTable = () => {
    return (
        <>

            <table className="min-w-full mt-5 text-sm bg-white divide-y-2 divide-gray-200">



                {/* Encabezado de la tabla aquí */}
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
                            Store
                        </th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                            Price
                        </th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                            Stock
                        </th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                            Low inventary
                        </th>
                        
                       
                    </tr>
                </thead>



                <tbody className="divide-y divide-gray-200">
                  
                </tbody>
            </table>
        </>
    )
}
