import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import * as reducers from './modules';
// import { combineImmutableReducers } from 'library/immutability-helper';

const rootReducer = combineReducers(
  Object.assign({}, reducers, { routing: routerReducer }, { form: formReducer })
);

// const rootImmutableReducer = combineImmutableReducers({ member, routing: routerReducer });

export default rootReducer;
