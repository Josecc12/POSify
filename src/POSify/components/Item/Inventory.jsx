import React, { useState } from 'react'

export const Inventory = ({ stock, onInputChange }) => {

    const [trackInventory, setTrackInventory] = useState(false);
    const handleTrackInventoryChange = () => {
        const newTrackInventory = !trackInventory; // Cambiar el estado
    
        // Actualizar el estado y llamar a onInputChange con el nuevo valor
        setTrackInventory(newTrackInventory);
        onInputChange({ target: { name: 'trackInventory', value: newTrackInventory } });
      };
    return (


        <>

            {/*Inventory*/}

            <div className='w-full p-5 shadow-2xl lg:w-4/6'>
                <div className="flow-root divide-y divide-gray-100 ">


                    <h2 className='mt-10 text-xl font-semibold'>Inventario</h2>
                    <hr />
                    <div className='flex justify-between my-4'>
                        <p>stock</p>
                        <label className="relative h-6 bg-black cursor-pointer ">
                            <input
                                name='stock'
                                value={stock}
                                onChange={onInputChange}
                                type="number" className='text-right border-slate-600 ' />


                        </label>
                    </div>

                    <div className='flex justify-between my-4'>
                        <p>Seguir el Inventario</p>
                        <label className="relative h-6 cursor-pointer w-14">
                            <input 
                            checked={trackInventory}
                            onChange={handleTrackInventoryChange}
                            type="checkbox" className="sr-only peer" />

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

        </>



    )
}
