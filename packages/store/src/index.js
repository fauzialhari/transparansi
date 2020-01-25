import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/ck3vimh2334cb0160q3mq5jmt',
});

const client = new ApolloClient({
  cache,
  link,
});

export default client;
