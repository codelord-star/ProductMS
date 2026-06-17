import api from "../services/api";

function Register(){
    return(
        <div className="container mt-3">
            <div className="card shadow">
                <div className="card-body text-center">
                    <div>
                        <div>
                            <h1>Register</h1>
                        </div>
                        <div>
                            <form action="">
                                <input type="text" id="username" name="username" className="form-control mb-3" placeholder="Username"/>
                                <input type="email" id="email" name="email" className="form-control mb-3" placeholder="Email"/>
                                <input type="password" id="password" name="password" className="form-control mb-3" placeholder="Password"/>
                                <input type="password" id="confirm_password" name="confirm_password" className="form-control mb-3" placeholder="Confirm Password"/>
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