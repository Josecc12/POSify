import { check } from 'prettier'
import React from 'react'


const stores = [
    {
        check: false,
        store: 'Store 1',
        price: 100,
        stock: 10,
        lowInventary: 5,
    },
    {
        check: false,
        store: 'Store 2',
        price: 100,
        stock: 10,
        lowInventary: 5,
    }


]

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



                <tbody className="divide-y divide-gray-200 ">

                    {/* Cuerpo de la tabla aquí */}
                    {
                        stores.map((store, index) => (
                            <tr key={index}>
                                <td className='px-4 '>
                                    <input
                                        type="checkbox"
                                        id="SelectAll"
                                        className="w-5 h-5 border-gray-300 rounded"
                                    />
                                </td>
                                <td className='px-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                    {store.store}
                                </td>
                                <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                                    {store.price}
                                </td>
                                <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                                    {store.stock}
                                </td>
                                <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>

                                    <div>
                                        <label  className="sr-only"> Quantity </label>

                                        <div className="flex items-center gap-1">
                                            <label
                                                type="button"
                                                className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                                            >
                                                &minus;
                                            </label>

                                            <input
                                                value={store.lowInventary}
                                                type="number"
                                                className="w-24 h-10 text-center border-gray-200 rounded sm:text-sm"
                                            />

                                            <label
                                                type="button"
                                                className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                                            >
                                                &#43;
                                            </label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}
