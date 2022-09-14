import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home/Home';


const App = () => {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='*'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App