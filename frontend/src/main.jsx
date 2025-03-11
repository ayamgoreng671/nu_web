import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ayam from './Ayam.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Ayam/>
  </StrictMode>,
)
