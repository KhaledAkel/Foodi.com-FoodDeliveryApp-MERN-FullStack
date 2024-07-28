import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes' // Import the AppRoutes component
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes /> {/* Use the AppRoutes component */}
    </BrowserRouter>
  </React.StrictMode>,
)
