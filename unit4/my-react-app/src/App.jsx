import { useState } from 'react'
import './App.css'
import ControlledComponentExample from './components/ControlledComponentExample'
import UncontrolledComponentExample from './components/UncontrolledComponentExample'
import HandleFormSubmission from './components/HandleFormSubmission'
import ParentWithoutusecallback from './components/ParentWithoutusecallback'
import ParentWithusecallback from './components/ParentWithusecallback'
import Calculator from './components/Calculator'
import CounterWithuseReducer from './components/CounterWithuseReducer'
import ToDoUseReducer from './components/ToDoUseReducer'
import { ToggleButton } from './components/ToggleButton'
import HandleMultpleInput from './components/HandleMultpleInput'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HandleMultpleInput />
    </>
  )
}

export default App
