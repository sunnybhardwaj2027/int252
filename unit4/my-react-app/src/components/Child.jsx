import React from "react";

function Child({ onClick }){
    console.log("Child Rendered");

    return(
        <button onClick={onClick} style={{ marginTop:"20px"}}>
            Child Button
        </button>
    )
}

// React.memo -> should prevent re-render but won't 

export default React.memo(Child);