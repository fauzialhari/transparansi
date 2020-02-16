import React from 'react';
import { Switch, Route, useRouteMatch, useParams, matchPath } from 'react-router-dom';
import {
  useOrganizationsDispatcher,
  useOrganizationsState,
  actionTypes,
} from '@transparansi/store/dist/modules/Organizations';
import CardMedia from '@transparansi/dom-components/dist/surfaces/card/cardMedia';
import Users from './users';
import About from './about';

const Organizations = props => {
  let { path } = useRouteMatch();
  let { id } = useParams();

  const { organizations } = useOrganizationsState();
  console.log(props);

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
          {/* <CardMedia title={id} /> */}
          {JSON.stringify(organizations.find(org => org.id === id))}
        </Route>
      </Switch>
    </>
  );
};
export default Organizations;
