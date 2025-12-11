import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserDetail3() {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data = await res.json();
            setUser(data);
        }

        fetchUser();
    }, [id]);

    if(!user) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h1>User Detail 3</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>city: {user.address.city}</p>
        </div>
    )
}