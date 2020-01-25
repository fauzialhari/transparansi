import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const initialState = {
  organizations: [],
};

export const actionTypes = {
  QUERY_ALL_ORGANIZATIONS: 'QUERY_ALL_ORGANIZATIONS',
};

const organizationsStore = createContext(initialState);
const { Provider } = organizationsStore;

export const OrganizationsStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, { type, payload }) => {
    switch (type) {
      case actionTypes.QUERY_ALL_ORGANIZATIONS:
        return {
          ...state,
          organizations: payload,
        };

      default:
        break;
    }
  }, initialState);

  return <Provider value={[state, dispatch]}>{children}</Provider>;
};

export const useOrganizationsDispatcher = (type = 'QUERY_ALL_ORGANIZATIONS') => {
  const [_, dispatch] = useContext(organizationsStore);
  let theQuery;
  let onCompleted;
  switch (type) {
    case actionTypes.QUERY_ALL_ORGANIZATIONS:
      theQuery = gql`
        {
          allOrganizations {
            id
            name
          }
        }
      `;
      onCompleted = data =>
        dispatch({
          type,
          payload: data,
        });
      break;

    default:
      throw new Error('wrong type param for the custom hooks');
  }
  const [execute, { loading }] = useLazyQuery(theQuery, {
    onCompleted,
  });

  return [execute, loading];
};

export const useOrganizationsState = () => useContext(organizationsStore)[0];
