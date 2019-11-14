import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <HashRouter>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route render={<h1>This route is not correct.</h1>} />
      </Switch>
    </>
  </HashRouter>
);

export default Routes;
