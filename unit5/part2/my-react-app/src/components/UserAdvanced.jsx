import { useState, useEffect } from 'react';
import api from "../api/axios";

const UserAdvanced = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchUsers() {
    try {
      setLoading(true);
      setError("");  // reset error before new request

      const res = await api.get("/users");
      setUsers(res.data);

    } catch (err) {
      setError("Failed to fetch Users. Try again.");
      console.log(err);

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <h2>Loading Users...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  return (
    <div>
      <h2>Users List</h2>

      <button onClick={fetchUsers}>Refresh</button>

      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserAdvanced;
