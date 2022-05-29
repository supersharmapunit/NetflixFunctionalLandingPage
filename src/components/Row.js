import React, { useState, useEffect } from 'react'
import axios from '../axios'
import './Row.css'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"

const basePosterUrl = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");

    async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        // console.table(request.data.results);
        return request;
    }

    useEffect(() => {
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    
      const handleClick = (movie) => {
        if (trailerURL) {
          setTrailerURL("");
        } else {
          movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
            .then((url) => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerURL(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
      };

    return (
        <div className='row'>
            {/* title */}
            <h2>{title}</h2>

            <div className="row_posters">
                {/* row poster */}

                {movies.map((movie, idx) => (
                    <img onClick={() => handleClick(movie)} key={movie.id} className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${basePosterUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {/* container with posters */}

            {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}

        </div>
    )
}

export default Row