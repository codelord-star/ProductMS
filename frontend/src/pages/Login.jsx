import api from "../services/api";

function Login(){
    return(
        <div className="container mt-3">
            <div className="card shadow">
                <div className="card-body text-center">
                    <div>
                        <div>
                            <h1>Login</h1>
                        </div>
                        <div>
                            <form action="">
                                <input type="email" id="email" name="email" className="form-control mb-3" placeholder="Email"/>
                                <input type="password" id="password" name="password" className="form-control mb-3" placeholder="Password"/>
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