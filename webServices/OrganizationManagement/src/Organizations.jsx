import React from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import CardMedia from '@transparansi/dom-components/dist/surfaces/card/cardMedia';
import Users from './pages/users';
import About from './pages/about';

const Organizations = () => {
  let { path } = useRouteMatch();
  let { id } = useParams();

  return (
    <>
      <Switch>
        <Route path={`${path}/users`}>
          <Users />
        </Route>
        <Route path={`${path}/about`}>
          <About />
        </Route>
        <Route exact path={`${path}/`}>
          <CardMedia title={id} />
        </Route>
      </Switch>
    </>
  );
};
export default Organizations;
