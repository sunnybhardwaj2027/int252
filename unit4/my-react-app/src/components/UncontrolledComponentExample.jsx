import { useRef } from "react";

const UncontrolledComponentExample = () => {

    const inputRef = useRef();
    
    function handleSubmit(){
        console.log(inputRef.current.value);
    }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default UncontrolledComponentExample;
