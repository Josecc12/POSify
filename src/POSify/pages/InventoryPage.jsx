import React from 'react'
import { PosifyLayout } from '../../layout/PosifyLayout'
import { InventoryTable } from '../components/InventoryTable'

import { DropDown } from '../components/DropDown';

const testData = [
  {
    id: 1,
    name: 'Producto 1',
    category: 'Electrónica',
    price: 499.99,
    cost: 299.99,
    utility: 200,
    stock: 50,
  },
  {
    id: 2,
    name: 'Producto 2',
    category: 'Ropa',
    price: 29.99,
    cost: 12.99,
    utility: 17,
    stock: 100,
  },
  {
    id: 3,
    name: 'Producto 3',
    category: 'Hogar',
    price: 149.99,
    cost: 89.99,
    utility: 60,
    stock: 25,
  },
  // Puedes agregar más datos de prueba aquí
];


export const InventoryPage = () => {
  return (
    <PosifyLayout>


      <div className="h-full p-6 overflow-x-auto border-gray-400 border-solid ">


        <div className="flex flex-col justify-between w-full left-0flex sm:flex-row">
         
            <button
              className="inline-block w-full px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded sm:w-max hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              Add Product
            </button>








          <div className='flex flex-col sm:flex-row '>
            <DropDown buttonLabel={'Tienda'} anchorLabels={['Hola','Prueba']} />
            <DropDown buttonLabel={'Categoria'} anchorLabels={['Hola','Prueba']} />
           
          </div>

        </div>



        <div className="overflow-x-auto">
        <InventoryTable data={testData} />
          </div>    
       
        
       
     
      </div>

    </PosifyLayout >
  )
}
