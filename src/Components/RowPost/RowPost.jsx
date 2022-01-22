import axios from '../../axios';
import { imageUrl,API_KEY } from '../../constants/constants'
import YouTube from 'react-youtube';
import React, { useEffect, useState } from 'react'
import './RowPost.css'

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [UrlId, setUrlId] = useState('');

    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setMovies(response.data.results)
        })
    }, []);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            
            autoplay: 1,
        },
    };


    const MovieTrailer = (id)=>{

        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{

            console.log(response.data)


            if(response.data.results.length!==0)
            {
                setUrlId(response.data.results[0])
            }
            else{
                console.log('No Trailer');
            }

        });

    }

    return (
        <div className='row'>

            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj) =>
                    <img onClick={()=> MovieTrailer(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />
                )}

            </div>
            { UrlId && <YouTube videoId={UrlId.key} opts={opts}/>}
        </div>
    )
}

export default RowPost