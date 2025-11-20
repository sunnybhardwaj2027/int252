import React, { useContext } from "react";
import { createContext } from "react";

export default function Home() {
    const { theme, setTheme, info } = useContext(Themecontext);
    return (
        <div>
            <h1>Current theme: {theme}</h1>
            <button
            className="border-2 bg-blue-400 rounde-2xl"
            onClick={() => setTheme("dark")}>
                Make Dark
            </button>
            <button
            className="border-2 bg-blue-400 me-1.5 rounded-2xl"
            onClick={() => setTheme("light")}>
                Make Light
            </button>
        </div>
    )
}