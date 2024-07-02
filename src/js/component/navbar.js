import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

/*
	COMO USAR EL STORE
	1.- Importar el hook que manejara el store (useContext)
	2.- Importar el contexto (AppContext)
	3.- implementarlo en el componente (con useContext)
	4.- usar el store o actions
*/

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	const {user} = store

	console.log(user.name)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">{`Hola señor ${user.name}`}</span>
			</Link>
			<button onClick={()=> actions.changeName()}>Cambiar nombre</button>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
