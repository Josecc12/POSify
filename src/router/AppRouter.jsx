import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage';


import { BudgetPage, CategoriesPage, CategoryPage, DashBoardPage, EmployeeDetailsPage, EmployeesPage, InventoryPage , ItemPage, PermissionsPage, RoleDetailsPage } from '../POSify/pages';
import { usePosStore } from '../hooks/usePos';




export const AppRouter = () => {

  

  const {status} = usePosStore();

  return (
    <Routes>
      {
        'authenticated' === 'not-authenticated'
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
              <Route path='/pos' element={<BudgetPage />} />
              <Route path='/articles/list' element={<InventoryPage />} />
              <Route path='/articles/list/:id' element={<ItemPage />} />
              <Route path='/articles/categories' element={<CategoriesPage />} />
              <Route path='/articles/categories/:id' element={<CategoryPage />} />
              <Route path='/employees/list' element={<EmployeesPage />} />
              <Route path='/employees/list/:id' element={<EmployeeDetailsPage />} />
              
            
              
              <Route path='/employees/permissions' element={<PermissionsPage />} />
              <Route path='/role-detail/:id' element={<RoleDetailsPage />} />
              <Route path='/*' element={<Navigate to='/' />} />
            </>
          )

      }
    </Routes>
  )
}
