import React from 'react'
import ReactDOM from 'react-dom/client'
import { CsInventoryApp } from './CsInventoryApp'
import './index.css'
import { AppTheme } from './theme/AppTheme'
import { HashRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AppTheme>
        <CsInventoryApp />
      </AppTheme>
    </HashRouter>
  </React.StrictMode>
)
