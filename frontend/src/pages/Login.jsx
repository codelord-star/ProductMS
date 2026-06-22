import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const res = await api.get("users/");
            const users = res.data;
            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
                alert("Login successful");
                navigate("/");
            } else {
                alert("Invalid email or password");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("An error occurred while logging in");
        }
    };

    return(
        <div className="container mt-3">
            <div className="card shadow">
                <div className="card-body text-center">
                    <div>
                        <div>
                            <h1>Login</h1>
                        </div>
                        <div>
                            <form onSubmit={loginUser}>
                                <input type="email" id="email" name="email" className="form-control mb-3" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <input type="password" id="password" name="password" className="form-control mb-3" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <button type="submit" className="btn btn-success">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>        
        </div>    
    );
}

export default Login;