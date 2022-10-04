import React from 'react'
import ReactDOM from 'react-dom/client'
import { CsInventoryApp } from './CsInventoryApp'
import './index.css'
import { AppTheme } from './theme/AppTheme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>
      <CsInventoryApp />
    </AppTheme>
  </React.StrictMode>
)
