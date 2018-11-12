import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';

import createReducer from './reducers/rootReducer';
import rootEpic from './epics';

export default function configureStore(initialState = {}, history) {
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares, epicMiddleware)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // TODO Try to remove when `react-router-redux` is out of beta,
          // LOCATION_CHANGE should not be fired more than once after hot reloading
          // Prevent recomputing reducers for `replaceReducer`
          shouldHotReload: false
        })
      : compose;
  /* eslint-enable */

  // Add the reducer to your store on the `router` key
  // Also apply our middleware for navigating
  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  );

  epicMiddleware.run(rootEpic);

  return store;
}
