//@flow
// $FlowFixMe
import 'semantic-ui-css/semantic.min.css';
import ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';

import type { Store } from 'redux';
import App from './app';
import Error404Page from '@/components/pages/NotFoundPage404';
import history from './services/history';
import setupStore from './setupStore';

const MOUNT_NODE: HTMLElement | null = document.getElementById('root');

const store: Store<Object, Object> = setupStore(history);

const provider = (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/app/:main" component={App} />
        <Route component={Error404Page} />
      </Switch>
    </Router>
  </Provider>
);

if (MOUNT_NODE) ReactDOM.render(provider, MOUNT_NODE);
