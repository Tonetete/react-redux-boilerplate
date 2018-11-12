// Combine all reducers in this file and export the combined reducers.
// import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import global from './global.reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */

// Creates the main reducer
export default function createReducer() {
  return combineReducers({
    global,
    routing: routerReducer
  });
}
