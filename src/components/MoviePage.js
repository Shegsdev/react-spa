import React from 'react';
import useFetch from '../utils/fetch';

const Movie = (props) => {
    const { id } = props.match.params;
    
    const { response } = useFetch(`http://api.tvmaze.com/shows/${id}`, {});

    if (!response) {
        return <div>Loading...</div>
    }
    const movie = response

    return (      
        <div>
            <h2>Single movie view</h2>
            <div>
                <div></div>
                <h2>{movie.id}</h2>
                <p>{movie.url}</p>
            </div>
        </div>
        
    );
}

export default Movie;
