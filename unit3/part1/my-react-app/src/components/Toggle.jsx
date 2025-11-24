import { useState, useEffect } from "react";

function Toggle(){
    const [isLight, setIsLight] = useState(true);

    function handleToggle(){
        setIsLight(!isLight); 
    }

    useEffect(() => {
        console.log("coponent re-rendered!");
    });

    return (
        <div style={{
            backgroundColor : isLight ? "white" : "black",
            color : isLight ? "black" : "white",
            height : "50vh",
            padding : "20px",
        }}>
            <h1>{isLight ? "Light Mode" : "Dark Mode"}</h1>
            <button onClick={() => handleToggle()}>Toggle</button>
        </div>
    )
}

export default Toggle;