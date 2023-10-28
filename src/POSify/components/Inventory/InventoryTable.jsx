import React, { useEffect, useState } from 'react'
import { InventoryTableRow } from './InventoryTableRow';
import { Pagination } from '../Pagination';
import { usePosStore } from '../../../hooks/usePos';

export const InventoryTable = ({ data, searchTerm }) => {

    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15; 
    const { inventoryFilters } = usePosStore();

    // Aplica el filtro cada vez que cambie inventoryFilters & searchTerm
    const filteredData = data.filter((item) => {
        const storeMatch =
            inventoryFilters.store === 'All' || item.store === inventoryFilters.store;
        const categoryMatch =
            inventoryFilters.category === 'All' || item.category === inventoryFilters.category;
        // Aplicar el filtro de búsqueda solo si searchTerm no está vacío
        const searchTermMatch = searchTerm ? item.name.toLowerCase().includes(searchTerm.toLowerCase()) : true;
        

        return storeMatch && categoryMatch && searchTermMatch;

       
    });


    // Calcula totalItems basado en los datos filtrados
    const totalItems = filteredData.length;

    // Actualiza la tabla cuando cambie inventoryFilters & searchTerm
    useEffect(() => {
        setCurrentPage(1);
    }, [inventoryFilters , searchTerm]);

    // Lógica para calcular los índices de inicio y fin de los elementos a mostrar en la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    



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
                    {currentItems.map((item, index) => (
                        <InventoryTableRow key={index} {...item} />
                    ))}
                </tbody>
            </table>

            <div className='my-5 '>
                <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage}
                    currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </>
    )
}
