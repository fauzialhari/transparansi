import React, { createContext, useReducer } from 'react';

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

import combineReducers from 'react-combine-reducers';

const [rootReducerCombined, initialStateCombined] = combineReducers({
  reducerOne: [
    (state, action) => {
      return { ...state, data: 1 };
    },
    {},
  ],
  reducertwo: [
    (state, action) => {
      return { ...state, data: 2 };
    },
    {},
  ],
});

console.log(rootReducerCombined, initialStateCombined);
