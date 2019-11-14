import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import MainPage from './containers/MainPage';

const Routes = () => (
  <HashRouter>
    <>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route render={() => <h1>This route is not correct</h1>} />
      </Switch>
    </>
  </HashRouter>
);

export default Routes;
