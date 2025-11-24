import { useState } from 'react'
import Timer from './components/Timer';

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <>
      {/* <button onClick={() => alert('clicked!')}>click Me(Traditional HTML)</button> */}
      <div style={{ padding : 24}}>
        <button onClick={() => setShowTimer(s => !s)}>
          {showTimer ? "Hide Timer" : "Show Timer"}
        </button>

        <div style={{ marginTop : 16}}>
          {showTimer ? <Timer /> : <p>Timer is unmounted. click "show timer" to mount it.</p>}
        </div>
      </div>

    </>
  )
}

export default App
