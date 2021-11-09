import { HashRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter
    basename='shopur'>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
