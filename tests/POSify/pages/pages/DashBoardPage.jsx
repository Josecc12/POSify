import React from 'react'
import { Sidebar } from '../components/Sidebar'

import { useMenuStore } from '../../hooks/useMenu'
import { PosifyLayout } from '../../layout/PosifyLayout'


export const DashBoardPage = () => {

    const {  isMenuOpen } = useMenuStore()

    return (
        
       <PosifyLayout>
        <h1>Dashboard</h1>
       </PosifyLayout>
    )
}
