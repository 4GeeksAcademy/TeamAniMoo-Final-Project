import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../img/Logo1.png"

import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store,actions} = useContext(Context)
	return (
		<nav className="navbar bg-dark">
			<div className="container">
				<div>
					<Link to="/">
						<img src={logoImg} className="logo navbar-brand"/>
					</Link>
				</div>
				<div>
					<Link to="/manga">
						<span className="navbar-brand mb-0 h1">Manga</span>
					</Link>	
					<Link to="/anime">
						<span className="navbar-brand mb-0 h1">Anime</span>
					</Link>
				</div>
				<div className="ml-auto">
					{!store.token?(
						<Link to="/login">
							<button className="btn">Login</button>
						</Link>
				):(
					
					<button className="btn" onClick={()=> actions.logout()}>Logout</button>
					
				)}
					
	
				</div>
			</div>
		</nav>
	);
};
