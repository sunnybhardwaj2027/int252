import { useState } from "react";

function ButtonClickCounter(){
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increase</button>
        </div>
    )
}

export default ButtonClickCounter;