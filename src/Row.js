import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl])

    // console.log(movies)


    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className='row_posters'>
                {movies.map(e => {
                    return <img 
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`} key={e.id} 
                    src={`${base_url}${isLargeRow ? e.poster_path : e.backdrop_path}`} alt={e.name} />
                })}

            </div>
        </div>
    )
}

export default Row