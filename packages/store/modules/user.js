import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    allUsers: Boolean!
  }
`;

export const resolvers = {};
