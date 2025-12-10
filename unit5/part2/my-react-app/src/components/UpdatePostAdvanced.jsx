import { useState } from 'react';
import api from '../api/axios';

const UpdatePostAdvanced = () => {

    const [title, setTitle] = useState("");
    const [result, setResult] = useState("");

    async function updatePost () {
        try{
            const res = await api.put("/posts/1", {
                id: 1, 
                title,
                body: "updated body",
                userId: 1
            });

            setResult("Post Updated Succesfully!");
        } catch {
            setResult("Failed to update post");
        }
    }
  return (
    <div>
      <h2>Update Post</h2>

      <input placeholder='new title...' value={title} onChange={(e) => setTitle(e.target.value)} />

      <button onClick={updatePost}>Update</button>

      {result && <p>{result}</p>}
    </div>
  )
}

export default UpdatePostAdvanced;