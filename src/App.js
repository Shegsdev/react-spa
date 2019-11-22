import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage'
import MoviePage from './components/MoviePage'
import SearchPage from './containers/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/show/:id" component={MoviePage} />
        <Route path="/shows" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
