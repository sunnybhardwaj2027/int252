import { useState, useEffect } from "react";

const UserFetch = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUsers() {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUsers(data);
            setLoading(false);
        }

        loadUsers();
    }, []);

    if(loading) return <h2>Loading...</h2>

  return (
    <div>
      <h2>User List (GET request)</h2>
      <ul>
        {users.map((u) => (
            <li key={u.id}> {u.name} </li>
        ))}
      </ul>
    </div>
  )
}

export default UserFetch;
