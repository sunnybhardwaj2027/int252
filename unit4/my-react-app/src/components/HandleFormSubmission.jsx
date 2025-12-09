import { useState } from "react";

const HandleFormSubmission = () => {

    const [name, setName] = useState("");

    function HandleSubmit(e){
        e.preventDefault(); // prevent page reload
        console.log("submitted", name);
    }

  return (
    <form onSubmit={HandleSubmit}>
        <input 
            value={name}
            onChange={(e) => setName(e.target.value)} 
        />
        <button type="submit">Submit</button>
    </form>
  )
}

export default HandleFormSubmission
