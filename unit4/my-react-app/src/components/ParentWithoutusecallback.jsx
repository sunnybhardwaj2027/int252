import React from 'react'
import { useState } from 'react'
import Child from './Child'

const ParentWithoutusecallback = () => {

    const [count, setCount] = useState(0);

    // function recreated on every render
    const handlleClick = () => {
        console.log("clicked from Parent!");
    };

    console.log("Parent re-rendered");

  return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(c => c+1)}>Increase button</button>

        <Child onClick={handlleClick} />
    </>
  )
}

export default ParentWithoutusecallback
