import { useParams } from "react-router-dom";

export default function UserDetail() {
    const { id } = useParams(); // extract the dynamic ID from URL

    return (
        <div>
            <h1>User Detail Page</h1>
            <p>User ID: {id}</p>
        </div>
    )
}