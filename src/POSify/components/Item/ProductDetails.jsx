import React from 'react'

export const ProductDetails = () => {
    return (
        <div className='w-full p-5 shadow-2xl lg:w-4/6'>

            {/*Product details*/}

            <div className="flow-root">

                <h2 className='mb-5 text-xl font-semibold'>Product Details</h2>




                <dl className="-my-3 text-sm divide-y divide-gray-100">

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 ">Product</dt>
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="w-full pl-2 mt-1 border-gray-200 rounded-md shadow-sm h-7 sm:text-sm "
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Category</dt>
                        <div>


                            <select

                                className="h-6 mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                            >
                                <option value="">Please select</option>
                                <option value="JM">John Mayer</option>
                                <option value="SRV">Stevie Ray Vaughn</option>
                                <option value="JH">Jimi Hendrix</option>
                                <option value="BBK">B.B King</option>
                                <option value="AK">Albert King</option>
                                <option value="BG">Buddy Guy</option>
                                <option value="EC">Eric Clapton</option>
                            </select>
                        </div>
                    </div>






                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Product description
                        </label>

                        <textarea

                            className="w-full p-4 mt-2 align-top border-gray-200 rounded-lg shadow-sm sm:text-sm"
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
                            type="number"
                            placeholder="Q 00.00"
                            className="w-full px-2 py-1 mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>


                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Cost</dt>
                        <input
                            type="number"
                            placeholder="Q 00.00"
                            className="w-full px-2 py-1 mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">REF</dt>
                        <input
                            type="text"
                            placeholder='#0000'
                            className="w-full px-2 py-1 mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">BarCode</dt>
                        <input
                            type="text"
                            placeholder="000000-000000"
                            className="w-full px-2 py-1 mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>



                </dl>
            </div>

        </div>
    )
}
