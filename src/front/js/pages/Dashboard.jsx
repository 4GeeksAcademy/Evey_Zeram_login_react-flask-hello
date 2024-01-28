import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Dashboard = () => {

    const { store, actions } = useContext(Context);

    const handleClick = () => actions.logout()

    // Comentarios Clase:
    // store.isLoggedIn == true -> está logeado por lo tanto puede ver el dashboard
    // store.isLoggedIn != true -> no está logeado por lo tanto no puede ver el dashboard y lo envío a <Login/>


    return (
        store.isLoggedIn ? <Navigate to="/perfil" /> :
            <div className="card-body py-5 px-md-5">
                <div>
                    <button onClick={handleClick} type="button" className="btn btn-primary btn-block mb-4">Logout</button>
                </div>
                {/* Tabla ejemplo:  */}
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                            <th scope="col">Header</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1,001</td>
                            <td>random</td>
                            <td>data</td>
                            <td>placeholder</td>
                            <td>text</td>
                        </tr>
                        <tr>
                            <td>1,002</td>
                            <td>placeholder</td>
                            <td>irrelevant</td>
                            <td>visual</td>
                            <td>layout</td>
                        </tr>
                </tbody>
            </table>
            </div >
    )
}