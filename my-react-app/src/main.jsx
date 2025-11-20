import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TimerFunction from './TimerFunction.jsx'
import Refcount from './components/RefCount.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimerFunction />
    <Refcount />
  </StrictMode>,
)
