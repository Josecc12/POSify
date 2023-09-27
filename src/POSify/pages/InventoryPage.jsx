import React from 'react'
import { PosifyLayout } from '../../layout/PosifyLayout'
import { InventoryTable } from '../components/Inventory/InventoryTable'
import { AiOutlineSearch } from "react-icons/ai";
import { DropDown } from '../components/DropDown';

const testData2 = [
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
  {
    id: 4,
    name: 'Producto 4',
    category: 'Electrónica',
    price: 799.99,
    cost: 499.99,
    utility: 300,
    stock: 30,
  },
  {
    id: 5,
    name: 'Producto 5',
    category: 'Ropa',
    price: 39.99,
    cost: 18.99,
    utility: 21,
    stock: 80,
  },
  {
    id: 6,
    name: 'Producto 6',
    category: 'Hogar',
    price: 199.99,
    cost: 119.99,
    utility: 80,
    stock: 15,
  },
  {
    id: 7,
    name: 'Producto 7',
    category: 'Electrónica',
    price: 299.99,
    cost: 199.99,
    utility: 100,
    stock: 60,
  },
  {
    id: 8,
    name: 'Producto 8',
    category: 'Ropa',
    price: 49.99,
    cost: 24.99,
    utility: 25,
    stock: 120,
  },
  {
    id: 9,
    name: 'Producto 9',
    category: 'Hogar',
    price: 89.99,
    cost: 59.99,
    utility: 30,
    stock: 40,
  },
  {
    id: 10,
    name: 'Producto 10',
    category: 'Electrónica',
    price: 699.99,
    cost: 399.99,
    utility: 300,
    stock: 20,
  },
  {
    id: 11,
    name: 'Producto 11',
    category: 'Ropa',
    price: 59.99,
    cost: 29.99,
    utility: 30,
    stock: 90,
  },
  {
    id: 12,
    name: 'Producto 12',
    category: 'Hogar',
    price: 129.99,
    cost: 79.99,
    utility: 50,
    stock: 35,
  },
  {
    id: 13,
    name: 'Producto 13',
    category: 'Electrónica',
    price: 899.99,
    cost: 499.99,
    utility: 400,
    stock: 25,
  },
  {
    id: 14,
    name: 'Producto 14',
    category: 'Ropa',
    price: 69.99,
    cost: 34.99,
    utility: 35,
    stock: 70,
  },
  {
    id: 15,
    name: 'Producto 15',
    category: 'Hogar',
    price: 179.99,
    cost: 99.99,
    utility: 80,
    stock: 45,
  },
  {
    id: 16,
    name: 'Producto 16',
    category: 'Electrónica',
    price: 399.99,
    cost: 249.99,
    utility: 150,
    stock: 40,
  },
  {
    id: 17,
    name: 'Producto 17',
    category: 'Ropa',
    price: 79.99,
    cost: 39.99,
    utility: 40,
    stock: 60,
  },
  {
    id: 18,
    name: 'Producto 18',
    category: 'Hogar',
    price: 149.99,
    cost: 89.99,
    utility: 60,
    stock: 20,
  },
  {
    id: 19,
    name: 'Producto 19',
    category: 'Electrónica',
    price: 599.99,
    cost: 349.99,
    utility: 250,
    stock: 50,
  },
  {
    id: 20,
    name: 'Producto 20',
    category: 'Ropa',
    price: 99.99,
    cost: 49.99,
    utility: 50,
    stock: 75,
  },
  {
    id: 21,
    name: 'Producto 21',
    category: 'Hogar',
    price: 199.99,
    cost: 129.99,
    utility: 70,
    stock: 30,
  },
  {
    id: 22,
    name: 'Producto 22',
    category: 'Electrónica',
    price: 299.99,
    cost: 199.99,
    utility: 100,
    stock: 45,
  },
  {
    id: 23,
    name: 'Producto 23',
    category: 'Ropa',
    price: 49.99,
    cost: 24.99,
    utility: 25,
    stock: 100,
  },
  {
    id: 24,
    name: 'Producto 24',
    category: 'Hogar',
    price: 129.99,
    cost: 79.99,
    utility: 50,
    stock: 55,
  },
  {
    id: 25,
    name: 'Producto 25',
    category: 'Electrónica',
    price: 799.99,
    cost: 499.99,
    utility: 300,
    stock: 35,
  },
];

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


      <div className="h-full max-h-screen p-6 overflow-x-auto border-gray-400 border-solid">


        <div className="flex flex-col flex-wrap justify-between w-full left-0flex sm:flex-row lg:flex-nowrap">

          <button
            className="inline-block w-full px-12 py-3 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded sm:w-max hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Add Product
          </button>


          <div className='flex flex-col-reverse sm:flex-row '>
            <DropDown buttonLabel={'Tienda'} anchorLabels={['Hola', 'Prueba']} />
            <DropDown buttonLabel={'Categoria'} anchorLabels={['Hola', 'Prueba']} />

            <div className='flex flex-row-reverse justify-end my-4'>
              <input type="text" className='self-center w-full mx-2 text-sm text-gray-700 border-indigo-500 rounded h-7' />
              <AiOutlineSearch className='self-center text-2xl text-indigo-600' />
            </div>


          </div>

        </div>



        <div className="overflow-x-auto overflow-y-auto shadow-2xl">
          <InventoryTable data={testData2} />
        </div>




      </div>

    </PosifyLayout >
  )
}
