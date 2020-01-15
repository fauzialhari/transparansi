import React from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import Organizations from './Organizations';

export default () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={`${path}/:id`}>
          <Organizations />
        </Route>
      </Switch>
    </div>
  );
};
