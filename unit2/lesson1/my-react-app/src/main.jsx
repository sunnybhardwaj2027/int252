import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Welcome from './Welcome.jsx'
import ClassWelcome from './components/ClassWelcome.jsx'
import Greeting from './components/Greeting.jsx'
import UserCard from './components/UserCard.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserCard name = "sunny" age={21} course="Btech" />
  </StrictMode>,
)

