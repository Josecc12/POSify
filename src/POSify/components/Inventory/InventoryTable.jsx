import React from 'react'
import { InventoryTableRow } from './InventoryTableRow ';
import { Pagination } from '../Pagination';

export const InventoryTable = ({ data }) => {
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
                            Product
                        </th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                            Category
                        </th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                            Price
                        </th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                            Cost
                        </th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                            Utility %
                        </th>
                        <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                            Stock
                        </th>
                        <th className="w-10 px-4 py-2"></th>
                    </tr>
                </thead>



                <tbody className="divide-y divide-gray-200">
                    {data.map((item, index) => (
                        <InventoryTableRow key={index} {...item} />
                    ))}
                </tbody>
            </table>

            <div className='my-5 '>
                <Pagination totalItems={data.length} itemsPerPage={1} />
            </div>
        </>
    )
}
