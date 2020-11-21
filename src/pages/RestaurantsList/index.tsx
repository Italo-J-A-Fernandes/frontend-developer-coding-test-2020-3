import React, { useEffect, useState } from 'react';
import { Header } from './styled';

import client from '../../services/apollo';
import { LISTAR_RESTAURANTES } from '../../services/graphql-querys';

interface Restaurant {
  id: string;
  name: string;
  categories: [
    {
      title: string;
    },
  ];
  hours: [
    {
      is_open_now: boolean;
    },
  ];
  photos: [];
  price: string;
  rating: number;
}

const RestaurantsList: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);

  useEffect(() => {
    client.query({ query: LISTAR_RESTAURANTES }).then(response => {
      setRestaurants(response.data.search.business);
    });
  }, []);

  return (
    <>
      <Header>
        <h1>Restaurants</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Header>
    </>
  );
};

export default RestaurantsList;
