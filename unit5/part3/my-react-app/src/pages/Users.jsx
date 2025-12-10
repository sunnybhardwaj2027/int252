import { useLocation } from "react-router-dom"

export default function Users() {

    const location = useLocation();
    console.log(location.state);
    
    return <h1>Users page</h1>
}