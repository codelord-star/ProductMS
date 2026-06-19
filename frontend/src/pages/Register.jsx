import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register(){

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const registerUser = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            await api.post("users/", {
                username: username,
                email: email,
                password: password
            });
            alert("User registered successfully");
            navigate("/login");
        } catch (error) {
            console.error("Error registering user:", error);
            alert("Error registering user");
        }
    };

    return(
        <div className="container mt-3">
            <div className="card shadow">
                <div className="card-body text-center">
                    <div>
                        <div>
                            <h1>Register</h1>
                        </div>
                        <div>
                            <form onSubmit={registerUser}>
                                <input type="text" id="username" name="username" className="form-control mb-3" required placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                <input type="email" id="email" name="email" className="form-control mb-3" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <input type="password" id="password" name="password" className="form-control mb-3" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <input type="password" id="confirm_password" name="confirm_password" className="form-control mb-3" required placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>

                                <button type="submit" className="btn btn-success">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>        
        </div>    
    );
}

export default Register;