import React from 'react';
import queryString from 'querystring';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import StarRatings from 'react-star-ratings';
import Progress from 'react-progressbar';
import usefetch from '../utils/fetch';

const SearchPage = (props) => {

    const parsed = queryString.parse(props.location.search);
    const { response } = usefetch("https://api.tvmaze.com/search/shows?q=" + parsed['?q'], {});

    if (!response) return (
      <div>
        <Progress
            animation={300}
            completed={45}
            color='teal'
            height='5px' />
      </div>
    )

    let movieList = response !== null ? response.map((data) => {
        return (
            <React.Fragment key={data.show.id}>
              <LazyLoad offsetVertical={300}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <div className="card">
                      <Link to={`/show/${data.show.id}`}>
                        <div className="card-media" style={{backgroundImage: `url(${data.show.image.original || ''})`}}>
                          <div className="card-content">
                          </div>
                        </div>
                      </Link>
                      <div className="actions px-3 mt-6">
                        <div className="flex">
                          <div className="font-bold text-xl mb-2">{data.show.name}</div>
                          <StarRatings
                            rating={data.show.rating.average/10*6}
                            starRatedColor="orange"
                            numberOfStars={6}
                            name='rating'
                          />
                        </div>
                        {data.show.genres.map((genre, id) => (
                          <span key={id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">#{genre}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </LazyLoad>            
            </React.Fragment>
        );
    }) : '';
    
    return (
        <React.Fragment>
          <header>
              <h1 className="text-3xl font-bold pt-8 pb-4 ml-10">Search results for "{parsed['?q']}"</h1>
          </header>
          {/* Breadcrumb */}
          <nav className="bg-grey-light p-3 rounded font-sans w-full m-4">
                <ol className="list-reset flex text-grey-dark">
                    <li><Link to="/" className="text-blue font-bold">Movies</Link></li>
                    <li><span className ="mx-2">/</span></li>
                    <li>Search</li>
                </ol>
            </nav>
            {/* End Breadcrumb */}
          <div className="m-8 five-equal-sized-columns grid">
              {movieList}
          </div>
        </React.Fragment>
    )
}

export default SearchPage;
