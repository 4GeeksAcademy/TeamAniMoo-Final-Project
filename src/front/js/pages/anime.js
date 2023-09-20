import React, { useContext, useState } from "react";
import { Popular } from "../component/popular";
import "../../styles/anime.css";
import { Context } from "../store/appContext";
import { useGlobalContext } from "../component/global";
import { Airing } from "../component/airing";
import { Upcoming } from "../component/upcoming";





export const Anime = () => {
	const{handleSubmit,
		search,
		searchAnime,
		handleChange,
		getUpcomingAnime,
		getAiringAnime,
		getPopularAnime,
	} = useGlobalContext()
	const [rendered, setRendered] = useState('popular')
	const {store,actions} = useContext(Context)
	

	const switchComponent = () => {
		switch(rendered){
			case 'popular':
				return <Popular rendered={rendered}/>
			case 'airing':
				return <Airing rendered={rendered}/>
			default:
				return <Upcoming rendered={rendered}/>	
		}
	}
	return (
		<div className="container">
				
	
		<div className="container">
			{!store.token?(
				<div>you must log in to see this page</div>
			):(
				<div>
									<header className="row rendered">
					<h1 className="rendered-text">
						{rendered === 'popular' ? 'Popular Anime': 
						rendered === 'airing' ? 'Airing Anime': 'Upcoming Anime'
						}
					</h1>

						<div className="search-container input-group">
							<div className="filter-btn popular-filter" >
								<button className= "btn" onClick={()=>{
									setRendered('popular')
								}}>Popular</button>
							</div>
							<form action='' className="search-form" onSubmit={handleSubmit}>
								<div className="input-control">
									<input type="text" placeholder="Search Anime" value={search} onChange={handleChange}></input>
									<button className= "btn"type="submit">Search</button>
								</div>
							</form>
							<div className="filter-btn airing-filter" >
								<button className= "btn" onClick={()=>{
									setRendered('airing')
									getAiringAnime()
								}}>Airing</button>
							</div>
							<div className="filter-btn upcoming-filter" >
								<button className= "btn" onClick={()=>{
									setRendered('upcoming')
									getUpcomingAnime()
								}}>Upcoming</button>
							</div>
						</div>

				</header>
				{switchComponent()}
				</div>
			)}
		</div>

		</div>
	);
};