import React, { useCallback, useState } from 'react'
import Child from './Child';

const ParentWithusecallback = () => {

    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Clicked from Parent!");
    }, []);

    console.log("Parent Rendered");

  return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(c => c+1)}>Increase Count</button>

        <Child onClick={handleClick} />
    </>
  )
}

export default ParentWithusecallback
