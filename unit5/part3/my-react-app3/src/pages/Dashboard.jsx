import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <div style={{ display: "flex", gap: "20px"}}>

            {/* Sidebar */}
            <nav style={{ width: "200px", background: "eee", padding: "10px" }}>
                <h3>Dashboard Menu</h3>

                <ul>
                    <li>
                        <Link to="profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="settings">Settings</Link>
                    </li>
                    <li>
                        <Link to="reports">Reports</Link>
                    </li>
                </ul>
            </nav>

            {/* Content-area */}
            <div style={{ flex: 1, padding: "10px"}}>
                <Outlet />
                {/* This loads child routes content */}
            </div>
        </div>
    )
}