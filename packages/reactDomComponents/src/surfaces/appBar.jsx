import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

// const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${theme.drawerWidth}px)`,
      marginLeft: theme.drawerWidth,
    },
  },
}));
export default props => <AppBar className={useStyles().appBar} {...props} />;
