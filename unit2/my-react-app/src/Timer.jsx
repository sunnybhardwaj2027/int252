import React from "react";
import { useState, useEffect } from "react";

function Timer(){
    const [time, setTime] = useState(0)

    
    useEffect(() => {
        const id = setInterval(() => setTime(time +1), 1000);
        clearInterval(id)
        
    }, [time])


    return <p>Time: {time}s</p>
}

export default Timer