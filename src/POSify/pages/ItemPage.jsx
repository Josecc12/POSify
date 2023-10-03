import React, { useState } from 'react'
import { PosifyLayout } from '../../layout/PosifyLayout'
import { StoreTable } from '../components/Inventory/StoreTable'
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export const ItemPage = () => {

    const navigate = useNavigate();

    const [imagePreview, setImagePreview] = useState(null);

    const onImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };

            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };


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
                            <label className="relative h-6 cursor-pointer w-14">
                                <input type="checkbox" className="sr-only peer" />

                                <span
                                    className="absolute inset-0 transition bg-gray-300 rounded-full peer-checked:bg-indigo-500"
                                ></span>

                                <span
                                    className="absolute inset-y-0 w-6 h-6 m-0 transition-all bg-white rounded-full start-0 peer-checked:start-8"
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
                            <label className="block text-sm text-gray-500 ">Image</label>

                            <label className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>

                                <h2 className="mt-1 font-medium tracking-wide text-gray-700 ">Image </h2>

                                <p className="mt-2 text-xs tracking-wide text-gray-500 ">Upload or darg & drop your file SVG, PNG, JPG or GIF. </p>

                                <input type="file" className="hidden"
                                    onChange={onImageChange}
                                    accept="image/*" />

                                {imagePreview && (
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="h-auto max-w-full mt-4"
                                    />
                                )}

                            </label>
                        </div>


                    </div >


                </div>

                <div className='flex justify-between w-full my-4 lg:w-4/6 md:my-0 md:mt-4'>

                    <div>
                        <button
                            className="inline-block w-10 h-full px-3 py-3 text-sm font-medium text-white bg-red-600 border border-red-600 rounded sm:w-max hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500"
                        >
                            <BsFillTrashFill className='text-center' />
                        </button>

                    </div>

                    <div className='flex justify-end w-2/4 jus'>
                        <button
                            className="inline-block w-full px-2 py-3 text-sm font-medium text-white border rounded border-slate-600 bg-slate-600 sm:w-full hover:bg-transparent hover:text-slate-600 focus:outline-none focus:ring active:text-slate-500 "
                            onClick={() => navigate(-1)}
                        >
                            Cancel
                        </button>
                        <button
                            className="inline-block w-full px-3 py-3 ml-2 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded sm:w-full hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        >
                            Save
                        </button>

                    </div>


                </div>


            </div>
        </PosifyLayout>
    )
}
