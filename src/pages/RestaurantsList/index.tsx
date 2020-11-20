import React, { useEffect, useState } from 'react';
import {} from './styled';

import api from '../../services/api';

interface Restaurant {
  id: string;
  name: string;
}

const RestaurantsList: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);

  useEffect(() => {
    api.get('businesses/search?location=lasvegas').then(response => {
      setRestaurants(response.data.businesses);
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
