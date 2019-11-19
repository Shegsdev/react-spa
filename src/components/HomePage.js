import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Welcome to HomePage</h1>
            <p>
                <Link to="/movie">movie 1</Link>
            </p>
        </div>
    )
}

export default HomePage;
