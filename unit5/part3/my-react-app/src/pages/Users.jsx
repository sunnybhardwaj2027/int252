import { useLocation, useNavigate } from "react-router-dom"

export default function Users() {

    const location = useLocation();
    console.log(location.state);

    const navigate = useNavigate();

    const GoToHome = function(){
        navigate("/", {state: {from : "Users-Page"}});
    }
    
    return (
        <>
            <h1>Users page</h1>
            <button onClick={GoToHome}>Go to Home</button>
        </>
    )
}