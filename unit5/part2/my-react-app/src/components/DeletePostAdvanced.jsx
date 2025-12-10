import { useState } from 'react'
import api from '../api/axios'

const DeletePostAdvanced = () => {

    const [status, setStatus] = useState("");

    async function deletePost() {
        try{
            await api.delete("/posts/1");
            setStatus("Post deleted Successfully");
        } catch {
            setStatus("Failed to delete Post");
        }
    }

  return (
    <div>
      <h2>Delete Post</h2>
      <button onClick={deletePost}>Delete Post 1</button>
      <p>{status}</p>
    </div>
  )
}

export default DeletePostAdvanced
