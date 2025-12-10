import { useEffect, useState } from "react";
import api from "../api/axios";

function SearchUsers() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (query.length === 0) {
      setUsers([]);
      return;
    }

    const controller = new AbortController(); // cancel token

    async function search() {
      try {
        const res = await api.get(`/users`, {
          signal: controller.signal,
        });
        setUsers(res.data.filter(u => u.name.toLowerCase().includes(query.toLowerCase())));
      } catch (err) {
        if (err.name !== "CanceledError") {
          console.log("Error:", err);
        }
      }
    }

    const timer = setTimeout(search, 500); // debounce

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <div>
      <h2>Search Users</h2>

      <input
        placeholder="Search user name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchUsers;
