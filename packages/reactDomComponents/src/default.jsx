import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  drawerWidth: 240,
});

const DefaultThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default DefaultThemeProvider;
