import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from '../_actions/movie-action';
import { Link } from 'react-router-dom';

const MovieList = () => {
    const { movies, error } = useSelector(state => ({
        movies: state.movies.data,
        error: state.error,
    }));

    const [ err, setError ] = useState();
    const [isLoading, setIsLoading] = useState(false);
    
    const dispatch = useDispatch();

    useEffect(() => {
      const fetchData = () => {
        setIsLoading(true);
        try {
            dispatch(getAllMovies());
        } catch(error) {
            dispatch({ type: 'GET_ERRORS'});
            setError(error);
        }
      };
      fetchData()
    }, [error, dispatch]);

    if (error !== null && typeof(error) == 'string') {
      return <div>{error}</div>
    }

    let movieLinks = movies.map((movie) => {
      return (
        <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}><div>{movie.id}</div></Link>
            <small>{movie.url}</small>
        </div>
      );
    });

    return (
      <div>
        <h2>All movies</h2>
        <div>
            {!isLoading ? <p>Loading...</p> : movieLinks}
        </div>
      </div>
    );
}

export default MovieList;
