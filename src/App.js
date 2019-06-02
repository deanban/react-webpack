import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users';
// import Pizza from './containers/Pizza';

import AsyncComponent from './HOC/AsyncComponent';

const AsyncPizza = AsyncComponent(() => {
  return import('./containers/Pizza');
});

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link> | <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route exact path="/" component={Users} />
          <Route exact path="/pizza" component={AsyncPizza} />
        </div>
      </div>
    );
  }
}

export default App;
