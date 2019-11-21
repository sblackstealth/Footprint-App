import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import MainPage from './containers/MainPage';
import AboutUs from './components/AboutUs';

const Routes = () => (
  <HashRouter>
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/about" component={AboutUs} />
        <Route render={() => <h1>This route is not correct</h1>} />
      </Switch>
    </>
  </HashRouter>
);

export default Routes;
