import React from 'react';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import client from '@transparansi/store';
import { Landing } from '@transparansi/web-landing';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

const Test = () => {
  const { data } = useQuery(gql`
    query GetAllUser {
      allUsers @client
    }
  `);

  return data ? <>ada</> : <>tena</>;
};

function App() {
  return (
    <ApolloProvider client={client}>
      <Landing />
      <div className="App">
        <header className="App-header">
          <Test />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
