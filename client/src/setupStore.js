import configureStore from '@/store/configureStore';

const setupStore = (history, initialState = {}) => {
  // Create redux store with history
  const store = configureStore(initialState, history);

  // const session = getAccessSession();
  // if (session && session.token && session.domain)
  //   store.dispatch(restoreSession(session));

  return store;
};

export default setupStore;
