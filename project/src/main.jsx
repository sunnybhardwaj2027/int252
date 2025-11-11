import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ParentComponent from './ParentComponent.jsx' 
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name = "sunny kumar" age = {21} course ="B.tech(cse)"/>
    <ParentComponent />
  </StrictMode>,
)
