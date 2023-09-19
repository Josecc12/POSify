import React from 'react'
import ReactDOM from 'react-dom/client'
import POSifyApp from './POSifyApp.jsx'
import { Provider } from 'react-redux'
import './index.css'
import 'tailwindcss/tailwind.css';
import { store } from './store/store.js'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>

    </Provider>
    
  </React.StrictMode>,
)
