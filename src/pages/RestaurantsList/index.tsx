import React, { useEffect, useState } from 'react';
import ReactStars from 'react-stars';
import Skeleton from 'react-loading-skeleton';

import { Header, ContainerListRest, ListRestaurants, RestItem } from './styled';
import client from '../../services/apollo';
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
  photos: string;
  price: string;
  rating: number;
}

const RestaurantsList: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  const [countRestaurants, setCountRestaurants] = useState(0);
  const wd = window.innerWidth;

  useEffect(() => {
    client
      .query({
        query: LIST_RESTAURANTS,
        variables: { categories: '', price: '' },
      })
      .then(response => {
        setRestaurants(response.data.search.business);
      });
  }, []);

  async function handleMoreRestaurants() {
    const total = countRestaurants + 20;
    client
      .query({
        query: LIST_RESTAURANTS,
        variables: { offset: total },
      })
      .then(response => {
        setRestaurants([...restaurants, ...response.data.search.business]);
        setCountRestaurants(countRestaurants + 20);
      });
  }

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
          <ListRestaurants>
            {restaurants &&
              restaurants.map(restaurant => (
                <RestItem
                  key={restaurant.id}
                  img={restaurant.photos}
                  open={
                    restaurant.hours[0]
                      ? restaurant.hours[0].is_open_now
                      : false
                  }
                >
                  <div className="imagem" />
                  <div className="infoRest">
                    <h3>{restaurant.name}</h3>
                    <ReactStars
                      value={restaurant.rating}
                      color1="#dddddd"
                      color2="#002b56e0"
                      edit={false}
                      half
                    />
                    <div className="restStatus">
                      <span className="categoryRest">
                        {`${restaurant.categories[0].title} - ${restaurant.price}`}
                      </span>
                      {wd <= 425 ? (
                        <span className="status">
                          {restaurant.hours[0].is_open_now ? 'open' : 'closed'}
                        </span>
                      ) : (
                        <span className="status">
                          {restaurant.hours[0].is_open_now
                            ? 'open now'
                            : 'closed'}
                        </span>
                      )}
                    </div>

                    <button type="button">
                      <span>Learn More</span>
                    </button>
                  </div>
                </RestItem>
              ))}
          </ListRestaurants>
          <div>
            <button type="button" onClick={handleMoreRestaurants}>
              Load More
            </button>
          </div>
        </ContainerListRest>
      </main>
    </>
  );
};

export default RestaurantsList;
