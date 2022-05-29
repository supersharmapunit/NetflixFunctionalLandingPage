import React, { useEffect, useState } from 'react'
import axios from '../axios'
import requests from '../request';
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);


    async function fetchfn() {
        const req = await axios.get(requests.fetchNetflixOriginals);
        setMovie(req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]);
        return req;
    }

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1)+"...":str;
    }

    // console.log(movie);

    useEffect(() => {
        fetchfn()
    }, [])

    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            <div className="banner_contents">
                {/* title */}
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                {/* div->1buttons */}
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>

                {/* description */}
                <h1 className="banner_description">
                    {truncate(movie?.overview,150)}
                </h1>
            </div>

            <div className="banner-fadeBottom"></div>
        </header>
    )
}

export default Banner