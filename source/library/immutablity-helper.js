import { combineReducers } from 'redux';
import { Map } from 'immutable';

export const combineImmutableReducers = reducers => {
  const combinedReducers = combineReducers(reducers);

  return (state, action) => Map(combinedReducers(
      Map.isMap(state) ? state.toObject() : state, action
  ));
};
