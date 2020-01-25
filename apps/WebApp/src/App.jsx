import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthStoreProvider } from '@transparansi/store/dist/modules/Auth';
import client from '@transparansi/store';
import Dashboard from '@transparansi/web-dashboard';
import Landing from '@transparansi/web-landing';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthStoreProvider>
        <Router>
          <Landing />
          <Dashboard />
        </Router>
      </AuthStoreProvider>
    </ApolloProvider>
  );
}

export default App;
