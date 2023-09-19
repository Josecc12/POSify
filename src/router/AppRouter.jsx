import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage';
import { DashBoard } from '../POSify/pages/DashBoard';

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
            <Route path='/' element={<DashBoard/>}/>
            <Route path='/*' element={<Navigate to='/'/>}/>
          </>
        )

      }
    </Routes>
  )
}
