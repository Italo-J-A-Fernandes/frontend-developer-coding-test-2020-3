import React, { useEffect, useState } from 'react';
import {} from './styled';

import client from '../../services/apollo';
import { LISTAR_RESTAURANTES } from '../../services/graphql-querys';

interface Restaurant {
  id: string;
  name: string;
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
      {restaurants &&
        restaurants.map(resta => {
          return <p key={resta.id}>{resta.name}</p>;
        })}
    </>
  );
};

export default RestaurantsList;
