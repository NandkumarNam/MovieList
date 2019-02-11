import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import MovieList from './component/MovieList';
import MovieDetails from './component/MovieDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={MovieList} />
          <Route path='/:details' component={MovieDetails} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
