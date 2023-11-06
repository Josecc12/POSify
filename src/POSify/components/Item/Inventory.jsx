import React from 'react'

export const Inventory = () => {
    return (


        <>

            {/*Inventory*/}

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

        </>



    )
}
