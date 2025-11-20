import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InlineBox from './Components/InlineBox.jsx'
import Card from './Components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InlineBox />
    <App />
    <Card />
  </StrictMode>,
)
