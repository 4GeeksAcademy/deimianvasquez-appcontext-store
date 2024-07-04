import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { NavLink } from "react-router-dom";

/*
    COMO USAR EL STORE
    1.- Importar el hook que manejara el store (useContext)
    2.- Importar el contexto (AppContext)
    3.- implementarlo en el componente (con useContext)
    4.- usar el store o actions
*/

export const Navbar = () => {
    const { store, actions } = useContext(Context)
    const { user } = store

    console.log(user.name)

    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"}
                                aria-current="page"
                                to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"} to="/todos">Todos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"} to="/products">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"} to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            icon {store.todos.length}
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
