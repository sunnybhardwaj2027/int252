import { useState } from 'react'


function App({name}) {
  const [count, setCount] = useState(0)


  return (
    <>
      <p>count : {count}</p>
      <button onClick={() => setCount(count+1)}>+1</button>
      <h1>hellow , {name}</h1>
    </>
  )
}

export default App
