import React from 'react';

import { useLocation, useHistory, useRouteMatch, useParams } from 'react-router-dom';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '../data-display/typography';

export default props => {
  const path = useLocation();
  console.log(path);
  const h = useHistory();
  console.log(h);
  const d = useRouteMatch();
  console.log(d);

  const pa = useParams();
  console.log(pa);
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (
    <Breadcrumbs aria-label="breadcrumb" {...props}>
      <Link color="inherit" href="/" onClick={handleClick}>
        Material-UI
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Core
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
  );
};
