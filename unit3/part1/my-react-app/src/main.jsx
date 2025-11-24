import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BasicEventHandler from './components/BasicEventHandler.jsx'
import ButtonClickCounter from './components/ButtonClickCounter.jsx'
import Message from './components/Message.jsx'
import Toggle from './components/Toggle.jsx'
import MountandUpdate from './components/MountandUpdate.jsx'
import Unmounting from './components/unmounting.jsx'
import Timer from './components/Timer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
