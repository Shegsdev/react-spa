import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import Pagination from 'react-paginating';
import StarRatings from 'react-star-ratings';

import { getAllMovies } from '../_actions/movie-action';
import SearchBar from '../components/SearchBar';
import { chunkData } from '../utils/chunk';

const MovieList = () => {
    const { movies, error } = useSelector(state => ({
        movies: state.movies.data,
        error: state.error,
    }));

    const [ err, setError ] = useState();
    const [ currentPage, setCurrentPage ] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    
    const dispatch = useDispatch();

    const handlePageChange = (page, e) => {
      setCurrentPage(page);
    };

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
      fetchData();
    }, [error, dispatch]);

    if (error !== null && typeof(error) == 'string') {
      return (
        <div className="font-semibold text-xl text-center">
          <div className="lds-ripple text-center mt-64"><div></div><div></div></div>
          <div>{error}</div>
          <p>Please check your connection and try again</p>
        </div>)
    }

    const limit = 50;
    const pageCount = 5;
    const chunkSize = Math.ceil(movies.length / pageCount);
    var total = 0;
    
    if (movies && movies !== undefined && movies.length > 0) {
      let movieChunk = chunkData(movies, chunkSize)
      total = movieChunk.length * limit;
      
      var movieList = movieChunk[currentPage - 1].map((movie) => {
      return (
          <React.Fragment key={movie.id}>
            <LazyLoad offsetVertical={300}>
              <div className="m-1 relative overflow-hidden rounded-lg shadow-lg">
                  <div className="card">
                    <Link to={`/show/${movie.id}`}>
                      <div className="card-media" style={{backgroundImage: `url(${movie.image.original})`}}>
                        <div className="card-content">
                        </div>
                      </div>
                    </Link>
                    <div className="actions px-3 mt-6">
                      <div>
                        <div className="font-bold text-xl mb-2">{movie.name}</div>
                        <StarRatings
                          rating={movie.rating.average/10*6}
                          starRatedColor="orange"
                          numberOfStars={6}
                          name='rating'
                        />
                      </div>
                      {movie.genres.map((genre, id) => (
                        <span key={id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#{genre}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </LazyLoad>            
          </React.Fragment>
      );
    });
  }

    return (
      <React.Fragment>
        <header className="text-center">
            <h1 className="text-3xl font-bold text-teal-500 pt-8 pb-4">TVMaze Movies</h1>
            {!total ? <div className="lds-ripple"><div></div><div></div></div> : <SearchBar /> }
        </header>
        <div className="four-equal-sized-columns grid m-2">
            {!isLoading ? <div>loading...</div> : movieList }
        </div>
        {!total ? <div></div> :
          <Pagination
            total={total}
            limit={limit}
            pageCount={pageCount}
            currentPage={currentPage}
          >
            {({
              pages,
              currentPage,
              hasNextPage,
              hasPreviousPage,
              previousPage,
              nextPage,
              totalPages,
              getPageItemProps
            }) => (
              <div className="my-8 text-center">
                <button
                  {...getPageItemProps({
                    pageValue: 1,
                    onPageChange: handlePageChange
                  })}
                  className="mr-2 rounded-lg bg-gray-200 hover:bg-blue-200 px-3 py-2"
                >
                  First
                </button>

                {hasPreviousPage && (
                  <button
                    {...getPageItemProps({
                      pageValue: previousPage,
                      onPageChange: handlePageChange
                    })}
                    className="border-r border-grey-light px-3 py-2"
                  >
                    {'<'}
                  </button>
                )}

                {pages.map(page => {
                  let activePage = null;
                  if (currentPage === page) {
                    activePage = { backgroundColor: '#2d987d' };
                  }
                  return (
                    <button
                      {...getPageItemProps({
                        pageValue: page,
                        key: page,
                        style: activePage,
                        onPageChange: handlePageChange
                      })}
                      className="border-r border-grey-light px-3 py-2"
                    >
                      {page}
                    </button>
                  );
                })}

                {hasNextPage && (
                  <button
                    {...getPageItemProps({
                      pageValue: nextPage,
                      onPageChange: handlePageChange
                    })}
                    className="border-r border-grey-light px-3 py-2"
                  >
                    {'>'}
                  </button>
                )}

                <button
                  {...getPageItemProps({
                    pageValue: totalPages,
                    onPageChange: handlePageChange
                  })}
                  className="bg-gray-200 hover:bg-blue-200 ml-2 rounded-lg px-3 py-2"
                >
                  Last
                </button>
              </div>
            )}
          </Pagination>
        }
      </React.Fragment>
    );
}

export default MovieList;
