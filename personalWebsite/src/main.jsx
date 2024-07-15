import React from 'react'
import ReactDOM from 'react-dom/client'
import Projects from './Projects.jsx'
import './index.css'
import Header from './Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Projects />
  </React.StrictMode>,
)
