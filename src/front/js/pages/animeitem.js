import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AnimeItem = () => {
    const {id} = useParams();
    const [anime,setAnime] = useState([]);
    const [characters, setCharacters] = useState([]);

    const {title,synopsis,trailer,duration,aired,season,images,rank,rating,status,episodes} = anime
   

    const getAnime = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`)
        const data = await response.json();
        setAnime(data.data);
        console.log(data.data)
        
    }

    const getCharacters = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}/characters`)
        const data = await response.json();
        setCharacters(data.data);
        console.log(data.data);

    }


    useEffect(()=>{
        getAnime(id)
        getCharacters(id)
    },[])

    
    return(
        <div className="container">   
            
            <div>
                {trailer?.embed_url && <iframe id="trailer"
                    src={trailer?.embed_url}
                    title="Inline Frame Example"
                    width="1296"
                    height="450"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>}
            </div>

            <h1 className="anime-info-title">{title}</h1>
            <div className="anime-info">
                <img src={images?.jpg.large_image_url} alt=""/>
                <div>
                    <p>{synopsis}</p>
                    <p>Aired: {aired?.string}</p>
                    <p>Rating: {rating}</p>
                    <p>Rank: {rank}</p>
                    <p>Seasons: {season}</p>
                    <p>Status: {status}</p>
                    <p>Episodes: {episodes}</p>
                    <p>{duration}</p>
                </div>
            </div>
            <div className="Character-container">

            <h5 className="character-title">Characters</h5>
            <div className="container popular-anime row row-cols-4">
    
                {characters?.map((character)=>{
                    const {role} = character
                    const {images, name} = character.character
                    return(
                        <div className="card anime-card">
                            
                                <img  className= "card-img-top anime-card-img-top anime-character-img"src={images?.jpg.image_url} alt=""/>
                                <div className="card-body anime-card-body">
                                <h5 className=" card-title anime-card-title">{name}</h5>
                                <p className="card-title anime-card-title">{role}</p>
                                </div>
                        </div>
                    )
                })}   
            </div>
            </div>



        </div>
    )
}

