import React from 'react';

const SideBar = () => (
    <div className="sidebar text-gray-700 text-center bg-gray-200 py-2 w-64 mr-8 h-screen float-left">
        <img className="h-10 w-30 mx-auto m-5" src="./tvm-header-logo.png" alt="TVMaze Logo"/>
        <hr />
        <ul className="list-reset">
            <li>
                <a href="/" className="block p-4 text-grey-darker border-purple-500 hover:bg-gray-300 border-r-4">Home</a>
            </li>
            <li >
                <a href="/" className="block p-4 text-grey-darker border-grey-lighter hover:border-purple-300 hover:bg-gray-300 border-r-4">Playlist</a>
            </li>
            <li >
                <a href="/" className="block p-4 text-grey-darker border-grey-lighter hover:border-purple-300 hover:bg-gray-300 border-r-4">Favorites</a>
            </li>
        </ul>
    </div>
);

export default SideBar;
