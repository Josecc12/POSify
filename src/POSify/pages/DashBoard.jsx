import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { usePosStore } from '../../hooks/usePos'


export const DashBoard = () => {

    const {  isMenuOpen } = usePosStore()


    return (
        <div className='flex h-screen flex-col   m-0  sm:flex-row'>

            <Sidebar/>

          
            

        </div>
    )
}
