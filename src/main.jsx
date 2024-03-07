import React from 'react'
import ReactDOM from 'react-dom/client'
import HuginApp from './HuginApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <React.StrictMode>
      <HuginApp />
    </React.StrictMode>,
  </BrowserRouter>
)
