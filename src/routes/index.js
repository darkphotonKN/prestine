import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import App from '../components/App';
import Login from '../components/pages/Login';

const Routes = () => {
  return (
    <div className="main-app pt-5 pl-5 pr-5">
      <h2 className="main-title display-4">Prestine</h2>

      <ul className="main-nav">
        <li className="nav-item">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'/docs'}>Docs</Link>
        </li>
        <li className="nav-item">
          <Link to={'/login'}>Login</Link>
        </li>
        <li className="nav-item">
          <Link to={'/account'}>Account</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </div>
  );
};

export default Routes;
