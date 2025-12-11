import { Link } from "react-router-dom";

export default function UserDetail2() {
    const users = [
        { id: 1, name: "sunny"},
        { id: 2, name: "Rahul"},
        { id: 3, name: "Priya"}
    ]

    return (
        <div>
            <h1>Users Page</h1>

            <ul>
                {users.map((u) => (
                    <li key={u.id}>
                        <Link to={`/users2/${u.id}`}>
                            {u.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}