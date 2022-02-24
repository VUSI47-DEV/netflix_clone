import React, { useState,useEffect } from 'react';
import axios from '../axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const base_url = 'http://image.tmdb.org/t/p/w185/';


function Row({title,fetchUrl}) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState('');


    //when row loads run useEffect    
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            // console.log(request.data.results);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    },[fetchUrl])

    // console.log(movies);

    const opts = {
        height:'390',
        width:'100%',
        playerVars:{
        // https://developers.google.com/youtube/player_parameters
        autoplay:1,
        }

    }
    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }
        else{
            movieTrailer(movie?.name ||  movie?.title || movie?.original_title || '')
            .then((url) =>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('XtMThy8QKqU'));

            }).catch((error)=>console.log(error))
        }
    }

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row-posters'>
            {movies.map((movie)=>{
                return(

                <img 
                onClick={ ()=> handleClick()}
                key={movie.id} // optimization step. for rendering large ammount of data(list/row)
                className='row-poster' 
                src={`${base_url}${movie.poster_path}`} alt={movie.name}
                />
                )
            })}
        </div>
           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/> }
    </div>
  )
}

export default Row;