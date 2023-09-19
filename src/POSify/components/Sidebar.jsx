import React from 'react'
import { FiLogOut, FiSettings } from 'react-icons/fi'
import { SlPeople } from 'react-icons/sl'
import { BsPersonVcard } from 'react-icons/bs'
import { AiOutlineShopping, AiOutlineClose } from 'react-icons/ai'
import { TfiStatsUp } from 'react-icons/tfi'
import { BiStoreAlt } from 'react-icons/bi'
import { SidebarItem } from './SidebarItem'
import { useMenuStore } from '../../hooks/useMenu'


const menuItems = [
    {
      icon: <TfiStatsUp />,
      text: 'Dashboard',
      subMenu: ['Resumen de Ventas', 'Ventas por Artículo', 'Ventas por Categoría', 'Ventas por Empleado', 'Recibos'],
    },
    {
      icon: <AiOutlineShopping />,
      text: 'Articulos',
      subMenu: ['Lista de Articulos', 'Categorias'],
    },
    {
      icon: <BsPersonVcard />,
      text: 'Empleados',
      subMenu: ['Lista de Empleados', 'Permisos'],
    },
    {
      icon: <SlPeople />,
      text: 'Clientes',
    },
    {
      icon: <FiSettings />,
      text: 'Settings',
    },
  ];


export const Sidebar = () => {

    const { isMenuOpen  , onMenu } = useMenuStore();
    
  return(
    <>
    <aside className={`
    ${isMenuOpen ? 'flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto ' : 'flex flex-row h-10 w-screen '} 
    
    bg-slate-900 border-r border-slate-800 rtl:border-r-0 rtl:border-l 
    `
    }>
      <a href="#" className={`${isMenuOpen ? ' ' : 'ml-2'} flex justify-center items-center text-white `}
          onClick={onMenu}>
        <BiStoreAlt className='text-3xl mr-2' />
        <h1 className='text-2xl font-bold'>POSIFY</h1>
      </a>

      <div className={` ${isMenuOpen ? '' : 'flex-row mt-0'} flex flex-col justify-between flex-1 mt-6`}>
        <nav className={`${isMenuOpen ? '' : 'hidden'} `}>
          {menuItems.map((menuItem, index) => (
            <SidebarItem
              key={index}
              icon={menuItem.icon}
              text={menuItem.text}
              subMenu={menuItem.subMenu}
            />
          ))}
        </nav>

        <hr className={`${isMenuOpen ? '' : 'hidden'} my-6 border-gray-200 `}/>

        <a href="#" className={`${isMenuOpen ? 'flex items-center px-4 mt-4 -mx-2 ' : 'absolute top-2 right-2'}  text-white `}>
          <img className={`${ isMenuOpen ? ' h-9 w-9 border-2': ' '} object-cover mx-2 rounded-full w-7 h-7`} 
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />

          <span className={`${isMenuOpen ? '' : 'hidden'}  mx-2 font-medium `}>John Doe</span>
          <FiLogOut className={`${isMenuOpen ? '' : 'hidden'}`}/>
        </a>
      </div>
    </aside>

    <AiOutlineClose className={`${isMenuOpen ? 'text-2xl text-red-400 absolute top-2 right-2' : 'hidden'} sm:hidden z-40`} onClick={onMenu} />
  </>
  )
}
