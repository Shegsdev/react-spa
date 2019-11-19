import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage'
import MoviePage from './components/MoviePage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movie" component={MoviePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
