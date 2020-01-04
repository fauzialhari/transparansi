import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Organization from '@transparansi/web-organization-management';
import DefaultThemeProvider from '@transparansi/dom-components/dist/default';
import AppBar from '@transparansi/dom-components/dist/surfaces/appBar';
import Drawer from '@transparansi/dom-components/dist/navigation/drawer';
import Main from '@transparansi/dom-components/dist/surfaces/main';
import Typography from '@transparansi/dom-components/dist/data-display/typography';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';

import Home from './pages/home';
const Dasboard = () => {
  const [isMobileMenuOpen, setMobileMenu] = useState(true);
  return (
    <Router>
      <Route path="/dashboard">
        <DefaultThemeProvider>
          <section className={'Dasboard'}>
            <AppBar position="sticky">
              <Toolbar>
                <Hidden smUp>
                  <IconButton color="inherit" onClick={() => setMobileMenu(!isMobileMenuOpen)}>
                    <MenuIcon></MenuIcon>
                  </IconButton>
                </Hidden>
                Dasboard
              </Toolbar>
            </AppBar>
            <Drawer
              isMobileMenuOpen={isMobileMenuOpen}
              onCloseMobileMenu={() => setMobileMenu(false)}
            >
              Dashboard
            </Drawer>
            <Main>
              <Switch>
                <Route exact path="/dashboard" component={Home}></Route>
                <Route path="/dashboard/organization" component={Organization}></Route>
                <Route
                  component={() => (
                    <div>Look's like you are get lost in Dashboard, Do you need help?</div>
                  )}
                ></Route>
              </Switch>
            </Main>
          </section>
        </DefaultThemeProvider>
      </Route>
    </Router>
  );
};

export default Dasboard;