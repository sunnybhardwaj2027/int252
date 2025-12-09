import React, { useState } from 'react'

const useCounter = ( initial = 0 ) => {

    const [count, setCount] = useState(initial);

    const incre = () => {
        setCount(count+1);
    }

    const decre = () => {
        setCount(count-1);
    }

    const reset = () => {
        setCount(0);
    }

  return (
    {count, incre, decre, reset}
  )
}

export default useCounter;
