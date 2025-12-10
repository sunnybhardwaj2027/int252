import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
        </nav>
    )
}