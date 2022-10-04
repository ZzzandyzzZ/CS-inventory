import React from 'react'
import ReactDOM from 'react-dom/client'
import { CsInventoryApp } from './CsInventoryApp'
import './index.css'
import { AppTheme } from './theme/AppTheme'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppTheme>
        <CsInventoryApp />
      </AppTheme>
    </BrowserRouter>
  </React.StrictMode>
)
