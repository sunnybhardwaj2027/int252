import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserAdvanced from './components/UserAdvanced'
import CreatePostAdvanced from './components/CreatePostAdvanced'
import UpdatePostAdvanced from './components/UpdatePostAdvanced'
import DeletePostAdvanced from './components/DeletePostAdvanced'
import SearchUsers from './components/SearchUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserAdvanced />
      <CreatePostAdvanced />
      <UpdatePostAdvanced />
      <DeletePostAdvanced />
      <SearchUsers />
    </>
  )
}

export default App
