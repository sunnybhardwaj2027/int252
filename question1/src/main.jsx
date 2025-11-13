import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Car from './Car.jsx'
import Parent from './Parent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Car 
      carInfo={{ name: 'ford', model: 'mustang' }} 
      years={[2000, 2003, 2006]}
    />
    <Parent />
  </StrictMode>,
)
