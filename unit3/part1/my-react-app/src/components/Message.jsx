import { useState } from "react";

function Message(){
    const [msg, setMsg] = useState("hello, sunny");

    return (
        <>
            <h1>{msg}</h1>
            <button onClick={() => setMsg("Welcome to React!")}>change Message</button>
        </>
    )
}

export default Message;