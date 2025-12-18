import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FilterUsers3() {

    const [searchParams, SetSearchParams] = useSearchParams();
    const [users, setUsers] = useState([]);

    const search = searchParams.get('search') || "";

    useEffect(() => {
        async function fetchUsers() {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();

            const filtered = data.filter( u => 
                u.name.toLowerCase().includes(search.toLowerCase())
            );

            setUsers(filtered);
        }

        fetchUsers();
    }, [search]); // runs when search params change


    return(
        <div>
            <h1>Filter User 3</h1>

            <input 
                value={search}
                placeholder="search..."
                onChange={(e) => SetSearchParams({ search: e.target.value})}
            />

            <ul>
                {users.map(u => <li key={u.id}>{u.name}</li>)}
            </ul>
        </div>
    )
}