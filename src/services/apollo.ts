import { ApolloClient, InMemoryCache } from '@apollo/client';

const URL =
  'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql';

const client = new ApolloClient({
  uri: URL,
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
    'Accept-Language': 'en_US',
  },
  cache: new InMemoryCache(),
});

export default client;
