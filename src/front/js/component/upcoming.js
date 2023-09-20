import React from "react";
import { useGlobalContext } from "./global";
import { Link } from "react-router-dom";



export const Upcoming = ({rendered}) => {
    const {upcomingAnime,isSearch,searchResults} = useGlobalContext()

    const conditonalRender = () => {
        if(!isSearch && rendered === 'upcoming'){
            return upcomingAnime.map((anime)=>{
                return <Link to= {`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <div className="card anime-card">
                        <img className="card-img-top anime-card-img-top" src={anime.images.jpg.image_url}/>
                        <div className="card-body anime-card-body">
                            <h5 className="card-title anime-card-title">{anime.title_english}</h5>
                        </div>
                    </div>
                </Link>
            })
        } else {
            return searchResults.map((anime)=>{
                return <Link to= {`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <div className="card anime-card">
                        <img className="card-img-top anime-card-img-top" src={anime.images.jpg.image_url}/>
                        <div className="card-body anime-card-body">
                            <h5 className="card-title anime-card-title">{anime.title_english}</h5>
                        </div>
                    </div>
                </Link>
            })
        }
    }
	return (
		<div className="container popular-anime row row-cols-4">
			{conditonalRender()}
		</div>
	);
};
