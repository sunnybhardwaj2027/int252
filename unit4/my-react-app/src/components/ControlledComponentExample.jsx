import { useState } from "react"


const ControlledComponentExample = () => {

    const [text, setText] = useState("");

  return (
    <div>
      <h2>{text}</h2>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default ControlledComponentExample
