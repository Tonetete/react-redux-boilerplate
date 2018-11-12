import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '@/components/pages/MainPage';
import Error404Page from '@/components/pages/NotFoundPage404';

/**
 * Main App component, handles rendering of authorized / unauthorized routes
 */

const App: React.ComponentType<Object> = () => (
  <Switch>
    <Route path="/app/main" component={MainPage} />
    <Route component={Error404Page} />
  </Switch>
);

export default App;
