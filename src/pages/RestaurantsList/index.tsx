import React, { useEffect, useState } from 'react';
import { Header, ContainerListRest } from './styled';

import client from '../../services/apollo';
import api from '../../services/api';
import { LIST_RESTAURANTS } from '../../services/graphql-querys';

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
    // client
    //   .query({
    //     query: LIST_RESTAURANTS,
    //     variables: { categories: '', price: '' },
    //   })
    //   .then(response => {
    //     setRestaurants(response.data.search.business);
    //   });
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
      <main>
        <ContainerListRest>
          <h2>All Restaurants</h2>

          <div>
            <button type="button">Load More</button>
          </div>
        </ContainerListRest>
      </main>
    </>
  );
};

export default RestaurantsList;
