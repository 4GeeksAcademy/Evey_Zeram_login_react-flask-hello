import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

// Tengo que crear un formulario con dos imputs Username y  Password
// Luego necesito controlar los imput con Onchange (email y password)
// Onclick para que funcione el login
// Tiene que hacer un fetch al login del back dentro de handleOnClick - añadiendo el route que es
// store.isLoggedIn == true -> está logeado por lo tanto puede ver el dashboard
// store.isLoggedIn != true -> no está logeado por lo tanto no puede ver el dashboard y lo envío a <Login/>

export const Login = () => {
    const {store, actions} = useContext(Context)
    const [username, setUsername] = useState("test@example.com");
    const [password, setPassword] = useState("test");

    const handleOnClick = async () => {
        // const url = process.env.BACKEND_URL + "api/login";
        const url = "https://silver-goldfish-5gvw5jj97jxh4wg4-3001.app.github.dev/api/login"
        const options = {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {
                "Content-Type":"application/json"
            }
        }
        const response = await fetch (url, options);
        console.log(response)
        if (response.ok) {
            // Tratar el error
            const data = await response.json();
            actions.login(data.access_token);
            // localStorage.setItem("token", data.access_token);
            // console.log(data)

        }
        console.log(response.status, response.statusText)
    }
    

    return (
        store.isLoggedIn ? <Navigate to ="/dashboard"/> :
        <div className="container">
            <h1>Inicia Sesión</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <h5>Username</h5>
                            <label lassName="form-label"> </label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <h5>Password</h5>
                            <label className="form-label"></label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button onClick={handleOnClick} type="button" className="btn btn-primary">
                            Login
                        </button>
                    </form>
                </div>
            </div>


        </div>
    );
};