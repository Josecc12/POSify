import React from 'react'
import { useMenuStore } from '../hooks/useMenu'
import { Sidebar } from '../POSify/components/Sidebar'



export const PosifyLayout = ({ children }) => {

    const { isMenuOpen } = useMenuStore()

    return (
        <div className='flex flex-col h-screen m-0 sm:flex-row'>

            <Sidebar />



            <div className={`${isMenuOpen
                ? 'absolute top-10 left-0   -z-10'
                : ''}  
                            container sm:relative sm:top-0 sm:left-0 sm:z-0 `}>

                {children}



            </div>




        </div>
    )
}
