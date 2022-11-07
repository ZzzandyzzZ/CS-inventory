import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { AppTheme } from './theme/AppTheme'
import { CsInventoryApp } from './CsInventoryApp'
import { store } from './store'

import './index.css'


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
