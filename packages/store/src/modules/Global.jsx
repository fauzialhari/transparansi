import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  error: {
    code: 200,
    message: '',
  },
};
const globalStore = createContext(initialState);
const { Provider } = globalStore;

export const GlobalStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, { type, error }) => {
    switch (type) {
      case 'ERROR':
        return {
          ...state,
          error,
        };

      default:
        break;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useGlobal = () => useContext(globalStore);
