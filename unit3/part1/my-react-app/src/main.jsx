import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BasicEventHandler from './components/BasicEventHandler.jsx'
import ButtonClickCounter from './components/ButtonClickCounter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <BasicEventHandler />
    <ButtonClickCounter />
  </StrictMode>,
)
