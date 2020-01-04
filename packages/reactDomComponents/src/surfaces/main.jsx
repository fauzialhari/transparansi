import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

// const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  main: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${theme.drawerWidth}px)`,
      marginLeft: theme.drawerWidth,
    },
  },
}));
export default ({ children, ...props }) => (
  <main className={useStyles().main} {...props}>
    <Container>{children}</Container>
  </main>
);
