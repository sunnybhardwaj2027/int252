import { useState, useCallback } from "react";
import Child from "./Child";

function Parent() {
    const [data, setData] = useState("Hello World");

    const handler = useCallback(() => {
        console.log("hello from parent");
        setData("Updated from child!");
    }, []);

    return (
        <>
            <h1>{data}</h1>

            <Child handler={handler} />
        </>
    );
}

export default Parent;
