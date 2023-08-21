import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../img/Logo1.png"

import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar bg-dark">
			<div className="container">
				<div>
					<Link to="/">
						<img src={logoImg} className="logo navbar-brand"/>
					</Link>
				</div>
				<div>
					<Link to="/news">
						<span className="navbar-brand mb-0 h1">News</span>
					</Link>
					<Link to="/manga">
						<span className="navbar-brand mb-0 h1">Manga</span>
					</Link>	
					<Link to="/anime">
						<span className="navbar-brand mb-0 h1">Anime</span>
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn">Login</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
