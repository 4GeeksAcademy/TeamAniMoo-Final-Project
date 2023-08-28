import React from "react";

import { useGlobalContext } from "./global";
import { Link } from "react-router-dom";


const Articles = () => {
  const {popularAnime,isSearch} = useGlobalContext();

	const conditionalRender = () => {
		if(!isSearch){
			return popularAnime.map((anime) => {
				return <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
          
                <div className="container">
                <div className="cards">
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col-md-4">
                      <img className="imageGo" src={anime.images.jpg.image_url} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h4 className="card-title text-center">{anime.title_english}</h4>
                        <h4 className ="card-title text-center">Rank : {anime.popularity}</h4>
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
