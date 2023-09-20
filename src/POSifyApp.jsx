import { useState } from 'react'
import './App.css'
import { LoginPage } from './auth/pages/LoginPage'
import { DashBoardPage } from './POSify/pages'
import { InventoryPage } from './POSify/pages/InventoryPage'


function POSifyApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InventoryPage/>
    </>
  )
}

export default POSifyApp
