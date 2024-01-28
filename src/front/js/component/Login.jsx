import React from "react";

export const Login = () => {
    return (
        <div className="container">
            <h1>Login</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label lassName="form-label">Username</label>
                            <input type="text"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password"/>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </form>
                </div>
            </div>


        </div>
    );
};