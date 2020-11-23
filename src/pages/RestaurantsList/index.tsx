import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';

import client from '../../services/apollo';
import {
  Header,
  ContainerListRest,
  ListRestaurants,
  RestItem,
  Filter,
  ButtonFilter,
} from './styled';
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
  const [filterCategory, setFilterCategory] = useState('');
  const [filterOpenNow, setFilterOpenNow] = useState(false);
  const [filterPrice, setFilterPrice] = useState('');

  const wd = window.innerWidth;

  useEffect(() => {
    searchFilters();
  }, [filterCategory, filterOpenNow, filterPrice]);

  useEffect(() => {
    client
      .query({
        query: LIST_RESTAURANTS,
      })
      .then(response => {
        setRestaurants(response.data.search.business);
      });
  }, []);

  async function handleMoreRestaurants() {
    const total = countRestaurants + 20;
    await client
      .query({
        query: LIST_RESTAURANTS,
        variables: {
          open_now: filterOpenNow,
          categories: filterCategory,
          price: filterPrice,
          offset: total,
        },
      })
      .then(response => {
        setRestaurants([...restaurants, ...response.data.search.business]);
        setCountRestaurants(countRestaurants + 20);
      });
  }

  async function searchFilters() {
    await client
      .query({
        query: LIST_RESTAURANTS,
        variables: {
          open_now: filterOpenNow,
          categories: filterCategory,
          price: filterPrice,
        },
      })
      .then(response => {
        setRestaurants(response.data.search.business);
      });
  }

  async function handlePriceFilter(valor: string) {
    setFilterPrice(valor);
    await searchFilters();
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
      <Filter>
        <div>
          <span>Filter By:</span>
          <div className="checkbox">
            <label htmlFor="open">
              <input type="radio" name="open" id="open" checked={false} />
              Open Now
            </label>
          </div>

          <div className="dropdownPrice">
            <span>All</span>
            <div className="dropdown-contentPrice">
              <button type="button" onClick={() => handlePriceFilter('')}>
                All
              </button>
              <button type="button" onClick={() => handlePriceFilter('1')}>
                $
              </button>
              <button type="button" onClick={() => handlePriceFilter('2')}>
                $$
              </button>
              <button type="button" onClick={() => handlePriceFilter('3')}>
                $$$
              </button>
              <button type="button" onClick={() => handlePriceFilter('4')}>
                $$$$
              </button>
            </div>
          </div>

          <div className="dropdown">
            <span>All</span>
            <div className="dropdown-content">
              <button type="button">All</button>
              <button type="button">SOUTHERN</button>
              <button type="button">FRENCH</button>
              <button type="button">AMERICAN</button>
              <button type="button">JAPANESE</button>
              <button type="button">MEXICAN</button>
              <button type="button">BREAKFAST & BRUNCH</button>
              <button type="button">SANDWICHES</button>
              <button type="button">BUFFETS</button>
              <button type="button">THAI</button>
              <button type="button">SEAFOOD</button>
              <button type="button">PIZZA</button>
            </div>
          </div>
        </div>

        <ButtonFilter nofilter={false}>
          <span>clear all</span>
        </ButtonFilter>
      </Filter>
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
                    <Link to={`/restaurant-detail/${restaurant.id}`}>
                      <button type="button">
                        <span>Learn More</span>
                      </button>
                    </Link>
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
