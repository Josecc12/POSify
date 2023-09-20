import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage';
import { DashBoardPage } from '../POSify/pages/DashBoardPage';

import { InventoryPage } from '../POSify/pages/InventoryPage';

export const AppRouter = () => {

  const status = 'authenticated' ;

  return (
    <Routes>
      {
        status === 'not-authenticated' 
        ? 
        (
            <>
            <Route path='/auth/*' element={<LoginPage/>}/> 
            <Route path='/*' element={<Navigate to='/auth/login'/>}/>
            </>
        )
        :
        (
          <>
           <Route path='/' element={<DashBoardPage/>}/>
            <Route path='/invetory' element={<InventoryPage/>}/>
            <Route path='/*' element={<Navigate to='/'/>}/>
          </>
        )

      }
    </Routes>
  )
}
