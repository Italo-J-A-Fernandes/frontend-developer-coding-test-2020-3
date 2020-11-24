import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RestaurantsList from '../pages/RestaurantsList/index';
import NotFound from '../pages/NotFound/index';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={RestaurantsList} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
