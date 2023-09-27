import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage';

import { CategoriesPage, DashBoardPage, InventoryPage , ItemPage, PermissionsPage } from '../POSify/pages';


export const AppRouter = () => {

  const status = 'authenticated';

  return (
    <Routes>
      {
        status === 'not-authenticated'
          ?
          (
            <>
              <Route path='/auth/*' element={<LoginPage />} />
              <Route path='/*' element={<Navigate to='/auth/login' />} />
            </>
          )
          :
          (
            <>
              <Route path='/' element={<DashBoardPage />} />
              <Route path='/articles/list' element={<InventoryPage />} />
              <Route path='/articles/categories' element={<CategoriesPage />} />
              <Route path='/articles/list/:id' element={<ItemPage />} />
              <Route path='/*' element={<Navigate to='/' />} />
              <Route path='/employees/permissions' element={<PermissionsPage />} />
            </>
          )

      }
    </Routes>
  )
}
