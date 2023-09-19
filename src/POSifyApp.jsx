import { useState } from 'react'
import './App.css'
import { LoginPage } from './auth/pages/LoginPage'
import { DashBoard } from './POSify/pages'


function POSifyApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DashBoard/>
    </>
  )
}

export default POSifyApp
