import React from 'react'
import { PosifyLayout } from '../../layout/PosifyLayout'
import { StoreTable } from '../components/Inventory/StoreTable'

export const ItemPage = () => {

    const onSum = () => {
        //sum 2 numbers

    }

    return (
        <PosifyLayout>
            <div className="h-full max-h-screen p-6 overflow-x-auto border-gray-400 border-solid">
                <div className='w-full p-5 shadow-2xl lg:w-4/6'>

                    <div className="flow-root">
                        <h2 className='mb-5 text-xl font-semibold'>Product Details</h2>




                        <dl className="-my-3 text-sm divide-y divide-gray-100">

                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900 ">Product</dt>
                                <input
                                    type="text"
                                    placeholder="Product Name"
                                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Category</dt>
                                <input
                                    type="text"
                                    placeholder="Category"
                                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>






                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Product description
                                </label>

                                <textarea

                                    className="w-full mt-2 align-top border-gray-200 rounded-lg shadow-sm sm:text-sm"
                                    rows="4"
                                    placeholder="Enter any additional product description..."
                                ></textarea>
                            </div>

                            <div className='py-3 '>
                                <p className='mb-4 font-medium text-gray-900'>Vendido por:</p>
                                <div className=''>
                                    <input
                                        type="checkbox"
                                        id="SelectAll"
                                        className="w-5 h-5 mx-3 border-gray-300 rounded-2xl "
                                    />
                                    <label >Unidad</label>
                                    <input
                                        type="checkbox"
                                        id="SelectAll"
                                        className="w-5 h-5 mx-3 border-gray-300 rounded-2xl "
                                    />
                                    <label >Peso/Volumen</label>


                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Price</dt>
                                <input
                                    type="text"
                                    placeholder="Q 00.00"
                                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>


                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">Cost</dt>
                                <input
                                    type="text"
                                    placeholder="Q 00.00"
                                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">REF</dt>
                                <input
                                    type="text"

                                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                <dt className="font-medium text-gray-900">BarCode</dt>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="w-full mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                                />
                            </div>



                        </dl>
                    </div>

                </div>

                <div className='w-full p-5 shadow-2xl lg:w-4/6'>
                    <div className="flow-root divide-y divide-gray-100 ">


                        <h2 className='mt-10 text-xl font-semibold'>Inventario</h2>
                        <hr />
                        <div className='flex justify-between my-4'>
                            <p>Seguir el Inventario</p>
                            <label class="relative h-6 w-14 cursor-pointer">
                                <input type="checkbox" class="peer sr-only" />

                                <span
                                    class="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-indigo-500"
                                ></span>

                                <span
                                    class="absolute inset-y-0 start-0 m-0 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-8"
                                ></span>
                            </label>
                        </div>



                    </div >


                </div>

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


                <div className='w-full p-5 shadow-2xl lg:w-4/6'>
                    <div className="flow-root divide-y divide-gray-100">


                        <h2 className='mt-10 text-xl font-semibold'>View in POS</h2>
                        <hr />

                        <div className='my-4'>
                            <label for="file" class="block text-sm text-gray-500 dark:text-gray-300">Image</label>

                            <label for="dropzone-file" class="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-500 dark:text-gray-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>

                                <h2 class="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Image </h2>

                                <p class="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">Upload or darg & drop your file SVG, PNG, JPG or GIF. </p>

                                <input id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div>


                    </div >


                </div>

                <div className='w-full p-5 lg:w-4/6'>


                </div>


            </div>
        </PosifyLayout>
    )
}
