import React from 'react';
import { ApolloProvider /*useQuery*/ } from '@apollo/react-hooks';
import client from '@transparansi/store';
import Dashboard from '@transparansi/web-dashboard';
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
      <Dashboard />
    </ApolloProvider>
  );
}

export default App;
