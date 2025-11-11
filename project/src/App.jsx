import { useState } from 'react'


function App({name, age, course}) {
  const [count, setCount] = useState(0)

  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    /*
    <div>
<button onClick={() => setCount(count - 1)}>-</button>
<span>{count}</span>
<button onClick={() => setCount(count + 1)}>+</button>
</div>
    */
/*
<button onClick={handleClick}>
      {isOn ? 'ON' : 'OFF'}
    </button>
    */

  <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>

  )
}

export default App
