import React, { useState } from 'react'
import { PosifyLayout } from '../../layout/PosifyLayout'
import { StoreTable } from '../components/Inventory/StoreTable'
import { BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { Inventory, ProductDetails, Stores } from '../components/Item';
import { ViewInPOS } from '../components/Item/ViewInPOS';
import { useForm } from '../../hooks/useForm';
import { usePosStore } from '../../hooks/usePos';

export const ItemPage = () => {

    const { startSavingProduct} = usePosStore();

    const navigate = useNavigate();

    const { formState, onInputChange} = useForm({
        name: '',
        category: '',
        description: '',
        soldBy: '',
        price: 0,
        cost: 0,
        reference: '',
        barcode: '',
        trackInventory: false,
        stock: 0,
        store: 'Tienda A',
        imageUrl: ''
        
    });

    const onSave = () => { 

       

        startSavingProduct(formState);
        navigate(-1);
    }



    return (
        <PosifyLayout>
            <div className="h-full max-h-screen p-6 overflow-x-auto border-gray-400 border-solid">
                <ProductDetails  {...formState} onInputChange={onInputChange}/>

                <Inventory {...formState} onInputChange={onInputChange} />

                <Stores />

                <ViewInPOS />


                {/*Buttons*/}

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
                            onClick={onSave}
                        >
                            Save
                        </button>

                    </div>


                </div>


            </div>
        </PosifyLayout>
    )
}
