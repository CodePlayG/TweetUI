import React from "react";

function Login() {
    return (
        <div>
            <div className="row align-items-center justify-content-center">
                <div className="col-md-7">
                    <h3>Login to <strong>Tweet-App</strong></h3>
                    <p className="mb-4">What's Happening, Tweet it now...</p>
                    <form action="#" method="post">
                        <div className="form-group first">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" placeholder="your-email@gmail.com" id="username" />
                        </div>
                        <div className="form-group last mb-3">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" placeholder="Your Password" id="password" />
                        </div>
                        <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>
                        <input type="submit" value="Log In" className="btn btn-block btn-primary" />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login