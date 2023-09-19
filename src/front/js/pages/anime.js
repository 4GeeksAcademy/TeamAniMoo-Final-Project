import React, { useContext } from "react";
import { Popular } from "../component/popular";
import "../../styles/anime.css";
import { Context } from "../store/appContext";



export const Anime = () => {
	const {store,actions} = useContext(Context)
	return (
		<div className="container">
			{!store.token?(
				<div>you must log in to see this page</div>
			):(
				
				<Popular/>
			)}
		</div>
	);
};
