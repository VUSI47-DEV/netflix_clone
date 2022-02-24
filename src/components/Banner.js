import React, { useState,useEffect} from 'react';
import axios from '../axios';
import requests from '../requests';
import './Banner.css';
function Banner() {

    const [movie,setMovie] =useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;

        }
        fetchData();
    },[])


    function truncate(str, n){
        return str?.length > n ? str.substr(0,n-1) +'...':str;
    }

    console.log(movie);

  return (
    <header className='banner'
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url('http://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}')`,
            backgroundPostion: 'center center',

        }}
    >
        <div className='banner-content'>
            <h1 className='banner-title'>
                {movie?.title || movie.name || movie?.orignial_name}
            </h1>
            <div className='banner-buttons'>
                <button className='banner-button'>Play</button>
                <button className='banner-button'>My List</button>
            </div>
            <p className='banner-description'>
                {movie.overview}
            </p>
        </div>
        <div className='banner-fade-bottom'/>
    </header>
  )
}

export default Banner