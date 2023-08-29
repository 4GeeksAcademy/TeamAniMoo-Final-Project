import React from "react";

import { useGlobalContext } from "./global";
import { Link } from "react-router-dom";


const Articles = () => {
  const {popularAnime,isSearch} = useGlobalContext();

	const conditionalRender = () => {
		if(!isSearch){
      const topFiveAnime = popularAnime.slice(0,5);
			return topFiveAnime.map((anime) => {
				return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
          
          <div className="container">
                <div className="cards">
                  <div className="row card_row">
                    <div className="col-md-3 img_container">
                      <img className="imageGo" src={anime.images.jpg.image_url} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h4 className="card-title text-start">{anime.title_english}</h4>
                        <h4 className ="card-title text-start">Rank: {anime.popularity}</h4>
                        <p className="card-text">
                          {anime.synopsis}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </Link> 
			})
		}
	}

  return ( 
    <div className="render">
      {conditionalRender ()}
    </div>
  )
   
  

};



export default Articles;
