import React, { useState, createContext } from 'react';
import { ApolloProvider /*useQuery*/ } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthStoreProvider } from '@transparansi/store/dist/modules/auth';
import client from '@transparansi/store';
import Dashboard from '@transparansi/web-dashboard';
import Landing from '@transparansi/web-landing';
// import gql from 'graphql-tag';
import './App.css';

// const Test = () => {
//   const { data } = useQuery(gql`
//     query GetAllUser {
//       allUsers @client
//     }
//   `);

//   return data ? <>ada</> : <>tena</>;
// };

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
