import React from 'react';
import { Link } from 'react-router-dom';

function MoviePage() {
    return (
        <div>
            <h1>Welcome to MoviePage</h1>
            <p>
                <Link to="/">Back to home</Link>
            </p>
        </div>
    )
}

export default MoviePage;
