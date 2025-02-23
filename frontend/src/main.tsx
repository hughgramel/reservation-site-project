import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './components/Navbar'
import './styles/Navbar.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <App />

  </React.StrictMode>,
)
