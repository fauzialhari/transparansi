import React from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import {
  useOrganizationsDispatcher,
  useOrganizationsState,
  actionTypes,
} from '@transparansi/store/dist/modules/Organizations';
import CardMedia from '@transparansi/dom-components/dist/surfaces/card/cardMedia';
import Users from './pages/users';
import About from './pages/about';

const Organizations = () => {
  let { path } = useRouteMatch();
  let { id } = useParams();
  const [dispatchOrganizations, loading] = useOrganizationsDispatcher(
    actionTypes.QUERY_ALL_ORGANIZATIONS,
  );
  const state = useOrganizationsState();
  return (
    <>
      <div>{JSON.stringify(state)}</div>
      <button onClick={() => dispatchOrganizations()}>get</button>
      <div>{loading ? 'loading' : 'tida loading'}</div>
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
