import { useEffect } from "react";

function MountandUpdate() {
    return (
        useEffect(() => {
        console.log("component re-rendered!");
        })
    )
}

export default MountandUpdate;