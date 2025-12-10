import { useNavigate } from "react-router-dom"

export default function Home() {

    const navigate = useNavigate();

    function goToUsers(){
        navigate("/users", { state: {from : "home-page"}});
    }

    return (
        <>
            <h1>Home Page</h1>
            <button onClick={goToUsers}>Go to Users</button>
        </>
    )
}