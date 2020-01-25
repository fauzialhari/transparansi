import React from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

import { useAuth } from '@transparansi/store/dist/modules/Auth';

const Landing = () => {
  let { path } = useRouteMatch();
  const { dispatch } = useAuth();
  const history = useHistory();

  return (
    <>
      <Switch>
        <Route exact path="/">
          <div className="landing">This is Landing</div>
          <button
            onClick={() => {
              dispatch({ type: 'Log In' });
              history.push('/dashboard');
            }}
          >
            Login
          </button>
        </Route>
      </Switch>
    </>
  );
};
export default Landing;
