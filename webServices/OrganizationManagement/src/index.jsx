import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Users from './pages/users';
import About from './pages/about';

export default () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      this is organization
      <Switch>
        <Route path={`${path}/users`}>
          <Users />
        </Route>
        <Route path={`${path}/about`}>
          <About />
        </Route>
      </Switch>
    </div>
  );
};
