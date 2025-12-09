import { useState } from "react";

function ChatUISimulation({ propsArr }) {
    const [arr, setArr] = useState([]);

    const array = [].concat(propsArr); 

    if (arr.length === 0) {  
        setArr(array);
    }

    return (
        <div>
            {arr.map((item, idx) => (
                <p key={idx}>{item}</p>
            ))}
        </div>
    );
}

export default ChatUISimulation;
