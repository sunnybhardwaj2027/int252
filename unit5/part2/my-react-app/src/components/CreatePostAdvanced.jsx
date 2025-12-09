import {useState} from 'react'
import api from "../api/axios"

const CreatePostAdvanced = () => {

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit() {
        if(!title.trim()){
            setMessage("Title cannot be emtpy");
            return;
        }

        try{
            const res = await api.post("/posts", {
                title,
                body: "dummy body...",
                userId: 1
            });

            setMessage(`Post Created! ID: ${res.data.id}`);
            setTitle("");
        } catch {
            setMessage("Failed to create Post");
        }
    }

  return (
    <div>
      <h2>Create Post</h2>

      <input placeholder='Enter title...' name="" id="" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleSubmit}>Create</button>

      {message && <p>{message}</p>}
    </div>
  )
}

export default CreatePostAdvanced
