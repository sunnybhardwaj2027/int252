import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Form2 from './components/Form2'
import Form3 from './components/Form3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form3 />
    </>
  )
}

export default App
