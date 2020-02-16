import React, { useEffect } from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import {
  useOrganizationsDispatcher,
  useOrganizationsState,
  actionTypes,
} from '@transparansi/store/dist/modules/Organizations';
import CardMedia from '@transparansi/dom-components/dist/surfaces/card/cardMedia';
import Organization from './pages/Organization';
// import About from './pages/about';

const Organizations = () => {
  let { path } = useRouteMatch();
  const [dispatchOrganizations, loading] = useOrganizationsDispatcher(
    actionTypes.QUERY_ALL_ORGANIZATIONS,
  );
  const { organizations } = useOrganizationsState();
  useEffect(() => {
    dispatchOrganizations();
  }, []);

  let history = useHistory();
  return (
    <>
      <Switch>
        <Route exact path={`${path}/`}>
          <button onClick={() => dispatchOrganizations()}>get</button>
          <div>{loading ? 'loading' : 'tida loading'}</div>
          {organizations.map(({ id, name }) => (
            <CardMedia
              title={name}
              key={id}
              cardActionAreaProps={{ onClick: () => history.push(`${path}/${id}`) }}
            />
          ))}
        </Route>
        <Route path={`${path}/:id`}>
          <Organization />
        </Route>
      </Switch>
    </>
  );
};
export default Organizations;
