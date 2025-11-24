import { useEffect } from "react";

function Unmounting() {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("running...");
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("Timer cleared");
        };
    }, [])

    return (
        <></>
    )
}

export default Unmounting;