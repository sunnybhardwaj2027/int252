import { useState, useEffect } from "react";

export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setSeconds(s => s+1);
        }, 1000);

        return () => {
            clearInterval(id);
            console.log("Timer Cleared!");
        }
    }, []);

    return (
        <div style={{ backgroundColor: "pink", padding : 16, margin : "4px"}}>
            <h2>Timer</h2>
            <p>Seconds elapsed: {seconds}</p>
        </div>
    )
}