import React from 'react'
import { StoreTable } from '../Inventory/StoreTable'

export const Stores = () => {
    return (
        <>

            {/*Stores*/}

            <div className='w-full p-5 shadow-2xl lg:w-4/6'>
                <div className="flow-root divide-y divide-gray-100">


                    <h2 className='mt-10 text-xl font-semibold'>Tiendas</h2>
                    <hr />

                    <div className='flex items-center gap-2 my-5'>
                        <input
                            type="checkbox"
                            id="SelectAll"
                            className="w-5 h-5 border-gray-300 rounded"
                        />
                        <p>El artículo está disponible para la venta en todas las tiendas</p>
                    </div>

                    <div className="overflow-x-auto overflow-y-hidden h-min">
                        <StoreTable />
                    </div>


                </div >


            </div>

        </>
    )
}
