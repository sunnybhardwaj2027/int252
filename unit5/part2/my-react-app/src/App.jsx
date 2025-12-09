import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserAdvanced from './components/UserAdvanced'
import CreatePostAdvanced from './components/CreatePostAdvanced'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserAdvanced />
      <CreatePostAdvanced />
    </>
  )
}

export default App
