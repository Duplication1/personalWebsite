import React from 'react'
import ReactDOM from 'react-dom/client'
import Projects from './Projects.jsx'
import './index.css'
import Header from './Header.jsx'
import Sidenav from './Sidenav.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Sidenav />
  </React.StrictMode>,
)
