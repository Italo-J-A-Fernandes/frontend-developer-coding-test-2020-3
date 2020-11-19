import React from 'react';

import GlobalStyle from './styles/global';
import RestaurantsList from './pages/RestaurantsList/index';

const App: React.FC = () => {
  return (
    <>
      <RestaurantsList />
      <GlobalStyle />
    </>
  );
};

export default App;
