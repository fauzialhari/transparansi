import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: theme.drawerWidth + 0,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: theme.drawerWidth + 0,
  },
}));
export default ({ isMobileMenuOpen, onCloseMobileMenu, children, ...props }) => (
  <nav className={useStyles().drawer} aria-label="mailbox folders">
    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    <Hidden smUp>
      <Drawer
        variant="temporary"
        anchor={useTheme().direction === 'rtl' ? 'right' : 'left'}
        open={isMobileMenuOpen}
        onClose={onCloseMobileMenu}
        classes={{
          paper: useStyles().drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {children}
      </Drawer>
    </Hidden>
    <Hidden xsDown>
      <Drawer
        classes={{
          paper: useStyles().drawerPaper,
        }}
        variant="permanent"
        open
      >
        {children}
      </Drawer>
    </Hidden>
  </nav>
);
