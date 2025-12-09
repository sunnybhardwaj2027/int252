import { useState } from "react";

function CreatePost() {
    
    const [title, setTitle] = useState("");
    const [response, setResponse] = useState(null);

    

    async function createPost() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", 
            headers: { "Content-type" : "applicatioin/json" },
            body: JSON.stringify({
                title: title,
                body: "this is a test",
                userId: 1
            })
        });

        const data = await res.json();
        setResponse(data);
    }

    return (
        <div>
            <h2>Create Post (POST request)</h2>

            <input 
            placeholder="Enter title..." 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            />

            <button onClick={createPost}>Create</button>

            {response && (
                <pre>{JSON.stringify(response, null, 2)}</pre>
            )}

        </div>
    )
}

export default CreatePost;