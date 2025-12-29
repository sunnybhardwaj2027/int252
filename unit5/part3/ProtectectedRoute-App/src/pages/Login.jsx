import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const { login } = useAuth();
    const navigate = useNavigate();

    function handleLogin(){
        login();
        navigate("/dashboard"); // redirect to dashboard
    }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login 
