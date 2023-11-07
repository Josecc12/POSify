import React, { useEffect, useState } from 'react'
import { usePosStore } from '../../../hooks/usePos'

export const ProductDetails = ({ name, description, price,cost,reference,barcode, onInputChange }) => {



    const { categories, startLoadingCategories } = usePosStore();
    const [isUnitSelected, setIsUnitSelected] = useState(false);
    const [isWeightSelected, setIsWeightSelected] = useState(false);

    const handleCategoryChange = (event) => {
        const selectedValue = event.target.value;
      
        // Busca el objeto de categoría que coincide con el valor seleccionado
        const selectedCategory = categories.find((category) => category.name === selectedValue);
        
      
       
      
        onInputChange({ target: { name: 'category', value: selectedCategory._id } });
      };

    const handleUnitCheckboxChange = () => {
        setIsUnitSelected(!isUnitSelected);
        setIsWeightSelected(false); // Desactivamos "Peso" si se selecciona "Unidad"
        onInputChange({ target: { name: 'soldBy', value: 'unit' } });
    };

    const handleWeightCheckboxChange = () => {
        setIsWeightSelected(!isWeightSelected);
        setIsUnitSelected(false); // Desactivamos "Unidad" si se selecciona "Peso"
        onInputChange({ target: { name: 'soldBy', value: 'weight' } });
    };


    useEffect(() => {

        startLoadingCategories()

    }, [])

    return (
        <div className='w-full p-5 shadow-2xl lg:w-4/6'>

            {/*Product details*/}

            <div className="flow-root">

                <h2 className='mb-5 text-xl font-semibold'>Product Details</h2>




                <dl className="-my-3 text-sm divide-y divide-gray-100">

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 ">Product</dt>
                        <input
                            name='name'
                            value={name}
                            onChange={onInputChange}
                            type="text"
                            placeholder="Product Name"
                            className="w-full pl-2 mt-1 border-gray-200 rounded-md shadow-sm h-7 sm:text-sm "
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Category</dt>
                        <div>


                            <select
                                onChange={handleCategoryChange}
                                className="h-6 mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                            >
                                {
                                    categories.map((category) => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))
                                }

                            </select>
                        </div>
                    </div>






                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Product description
                        </label>

                        <textarea
                            name='description'
                            value={description}
                            onChange={onInputChange}
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
                                checked={isUnitSelected}
                                onChange={handleUnitCheckboxChange}
                            />
                            <label >Unidad</label>
                            <input
                                type="checkbox"
                                id="SelectAll"
                                className="w-5 h-5 mx-3 border-gray-300 rounded-2xl "
                                checked={isWeightSelected}
                                onChange={handleWeightCheckboxChange}
                            />
                            <label >Peso/Volumen</label>


                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Price</dt>
                        <input
                            name='price'
                            value={price}
                            onChange={onInputChange}
                            type="number"
                            placeholder="Q 00.00"
                            className="w-full px-2 py-1 mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>


                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Cost</dt>
                        <input
                            name='cost'
                            value={cost}
                            onChange={onInputChange}
                            type="number"
                            placeholder="Q 00.00"
                            className="w-full px-2 py-1 mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">REF</dt>
                        <input
                            name='reference'
                            value={reference}
                            onChange={onInputChange}
                            type="text"
                            placeholder='#0000'
                            className="w-full px-2 py-1 mt-1 border-gray-200 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">BarCode</dt>
                        <input
                            name='barcode'
                            value={barcode}
                            onChange={onInputChange}
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
