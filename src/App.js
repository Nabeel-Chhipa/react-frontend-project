import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import NewPlace from './places/pages/NewPlace';
import Users from './user/pages/Users';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/users' exact>
            <Users />
          </Route>
          <Route path='/places/new' exact>
            <NewPlace />
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </>
  );
}

export default App;