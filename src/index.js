import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/sass/index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { StoreProvider } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
)

reportWebVitals()
