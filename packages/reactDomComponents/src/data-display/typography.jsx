import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontFamily: 'inherit',
  },
});

export default props => <Typography className={useStyles().root} {...props} />;
