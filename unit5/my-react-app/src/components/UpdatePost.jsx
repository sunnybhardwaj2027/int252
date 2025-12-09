import React, { useState } from 'react'

const UpdatePost = () => {

    const [title, setTitle] = useState("");
    const [result, setResult] = useState(null);

    async function updatePost() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT", 
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
                id: 1,
                title: title,
                body: "body updated...",
                userId: 1
            })
        });

        const data = await res.json();
        setResult(data);
    }

  return (
    <div>
      <h2>Update a Post (PUT request)</h2>
      <input 
        placeholder='New title...'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
         />

        <button onClick={updatePost}>Update</button>

        {result && <pre>{JSON.stringify(result, null, 2)}</pre>}

    </div>
  )
}

export default UpdatePost
