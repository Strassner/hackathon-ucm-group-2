import { useNavigate } from "react-router-dom";

function Login() {
    
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log("Login button clicked");
        navigate('/home');
    }


    return (
        <div>
        <h1>Login Page</h1>
        <button onClick={handleSubmit}>Login</button>
        </div>
    );
    
}

export default Login;