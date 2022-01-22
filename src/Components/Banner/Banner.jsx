import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios';
import { API_KEY, imageUrl } from "../../constants/constants"


export default function Banner() {

    const [movie, setMovie] = useState();

    useEffect(() => {

        axios.get(`trending/all/day?api_key=${API_KEY}`).then((response) => {

            console.log(response.data);
            var movie_number = Math.floor(Math.random() * 19) + 0;
            console.log(movie_number);
            setMovie(response.data.results[movie_number]);

        });

    }, []);

    return (
        <div className='banner' style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : " "})` }}>
            <div className="content">
                <h1 className='tittle'>{movie ? (movie.title ? movie.title : "Movie Name") : ""}</h1>
                <div className="banner_button">
                    <button className='btn'>Play</button>
                    <button className='btn'>My list</button>
                </div>
                <h2 className='description'>{movie ? movie.overview : ""}</h2>

            </div>
            <div className="fade-bottom"></div>

        </div>
    )
}
