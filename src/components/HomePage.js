import React from 'react';
import SideBar from './SideBar';
import MovieList from '../containers/MovieList';

function HomePage() {
    
    return (
        <div className="wrapper">
            <div className="container">
                <SideBar />
                <MovieList />
            </div>
        </div>
    )
}

export default HomePage;
