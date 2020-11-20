import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import GlobalStyle from './styles/global';
import Routes from './routes/index';
import apolloClient from './services/apollo';

const App: React.FC = () => {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </ApolloProvider>
    </>
  );
};

export default App;
