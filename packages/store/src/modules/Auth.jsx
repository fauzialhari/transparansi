import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  isLogin: window.localStorage.getItem('transparansi store'),
};
const authStore = createContext(initialState);
const { Provider } = authStore;

export const AuthStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    let newState;
    switch (action.type) {
      case 'Log In':
        newState = {
          ...state,
          isLogin: true,
        };
        window.localStorage.setItem('transparansi store', newState.isLogin);
        return newState;
      case 'Log Out':
        newState = {
          ...state,
          isLogin: true,
        };
        window.localStorage.setItem('transparansi store', newState.isLogin);
        return newState;
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useAuth = () => useContext(authStore);
