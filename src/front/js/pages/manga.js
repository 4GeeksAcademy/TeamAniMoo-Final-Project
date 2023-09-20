import React, {useContext} from "react";
import { Welcome } from "../component/welcome";
import { Context } from "../store/appContext";
import construction from "../../img/hero-images/underconstruction.jpg"



export const Manga = () => {
	const {store,actions} = useContext(Context)
	return (
		<div className="container">
			{!store.token?( 
				 <Welcome/>  
			 ):( 
				<div className="container">
					<img className="underconstruction"src={construction}/>
					<h1 className="underconstruction-title">Under construction</h1>
				</div>
			 )} 
		</div>
	);
};
