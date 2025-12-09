import { useState } from 'react'

const DeletePost = () => {

    const [status, setStatus] = useState("");

    async function deletePost(){
        await fetch("https://jsonplaceholder.typicode.com/posts/1",{
            method: "DELETE"
        })

        setStatus("Post deleted succesuffly");
    }

  return (
    <div>
      <h2>Delete Post (DELETE request)</h2>
      <button onClick={deletePost}>Delete Post ID 1</button>
      <p>{status}</p>
    </div>
  )
}

export default DeletePost
