import React from 'react';
import { PosifyLayout } from '../../layout/PosifyLayout';
import { RoleTable } from '../components/Role/RoleTable';


const POSoptions = [
  "Aceptar pagos",
  "Aplicar descuentos con acceso restringido",
  "Cambiar los impuestos en una venta",
  "Abrir el cajón de dinero sin realizar una venta",
  "Ver todos los recibos",
  "Procesar devoluciones de compras",
  "Reimprimir y reenviar recibos",
  "Editar artículos",
  "Ver el costo de los artículos",
  "Modificar configuraciones",


]


export const RoleDetailsPage = () => {
  return (
    <PosifyLayout>

      <div className='h-full max-h-screen p-6 overflow-x-auto border-gray-400 border-solid'>
        <div className='w-full p-5 shadow-xl lg:w-4/6'>

          {/*Role details*/}

          <div className="flow-root">

            <h2 className='mb-5 text-xl font-semibold'>Role Details</h2>




            <dl className="-my-3 text-sm divide-y divide-gray-100">

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900 ">Role Name:</dt>
                <input
                  type="text"
                  placeholder="Role Name"
                  className="w-full pl-2 mt-1 border-gray-200 rounded-md shadow-sm h-7 sm:text-sm "
                />
              </div>

            </dl>




          </div>

        </div>


        <div className='w-full p-5 shadow-2xl lg:w-4/6'>
          <div className="flow-root divide-y divide-gray-100 ">


            <div className='flex items-center justify-between mt-5'>
              <h2 className='text-2xl font-semibold '>POS</h2>
            
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
            <hr />
            {
              POSoptions.map((option, index) => (
                <div className='flex justify-between my-4' key={index}>
                  <p className='flex-wrap w-4/5'>{option}</p>
                  <input type="checkbox" className='w-5 h-5 mr-3' />
                </div>
              ))
            }



          </div >


        </div>

      </div>






    </PosifyLayout>
  );
};

export default RoleDetailsPage;
