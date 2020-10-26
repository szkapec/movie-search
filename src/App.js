import React from 'react';
import MoviesContainer from './components/Movies/MoviesContainer';
import MoviesSearch from './components/Movies/MoviesSearch';
import Default from './components/Default';
import {
  Route,
  Switch,
  HashRouter,
  BrowserRouter as Router
} from "react-router-dom";

function App() {

  return (
    <Router>
    <Switch>
      <Route exact path="/" component={MoviesContainer} />
      <Route exact path="/search/:id" component={MoviesSearch} cos="HEH?" />
      <Route component={Default} />
    </Switch>
  </Router>
    
  );
}

export default App;
