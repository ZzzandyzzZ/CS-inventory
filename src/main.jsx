import React from 'react'
import ReactDOM from 'react-dom/client'
import { CsInventoryApp } from './CsInventoryApp'
import './index.css'
import { AppTheme } from './theme/AppTheme'
import { HashRouter } from 'react-router-dom'
import { store } from './store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <AppTheme>
          <CsInventoryApp />
        </AppTheme>
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
