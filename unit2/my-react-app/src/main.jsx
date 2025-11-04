import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Timer from './Timer.jsx'
import Box from './Box.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name = "sunny"/>
    <Timer />
    <Box color = "pink"/>
  </StrictMode>,
)
