import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RestaurantsList from '../pages/RestaurantsList/index';
import RestaurantDetail from '../pages/RestaurantDetail/index';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={RestaurantsList} />
    <Route path="/home" component={RestaurantsList} />
    <Route path="/restaurants-list" component={RestaurantsList} />
    <Route path="/restaurant-detail" component={RestaurantDetail} />
  </Switch>
);

export default Routes;
