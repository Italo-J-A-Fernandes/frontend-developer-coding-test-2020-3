import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RestaurantsList from '../pages/RestaurantsList/index';
import RestaurantDetail from '../pages/RestaurantDetail/index';
import NotFound from '../pages/NotFound/index';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={RestaurantsList} />
    <Route path="/home" component={RestaurantsList} />
    <Route path="/restaurant-detail" component={RestaurantDetail} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
