import React from 'react';
import { Switch, Route, useRouteMatch, useParams } from 'react-router-dom';

import { OrganizationsStoreProvider } from '@transparansi/store/dist/modules/Organizations';
import Organizations from './Organizations';

export default () => {
  let { path } = useRouteMatch();
  return (
    <OrganizationsStoreProvider>
      <Switch>
        <Route path={`${path}/:id`}>
          <Organizations />
        </Route>
      </Switch>
    </OrganizationsStoreProvider>
  );
};
