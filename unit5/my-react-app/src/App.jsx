import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserFetch from './components/UserFetch'
import CreatePost from './components/CreatePost'
import UpdatePost from './components/UpdatePost'
import DeletePost from './components/DeletePost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < DeletePost />
    </>
  )
}

export default App
