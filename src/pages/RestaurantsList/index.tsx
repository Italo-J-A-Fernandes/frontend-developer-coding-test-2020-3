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
  const [priceCurrent, setPriceCurrent] = useState('All');
  const [filterClean, setFilerClean] = useState(false);

  const wd = window.innerWidth;

  useEffect(() => {
    client
      .query({
        query: LIST_RESTAURANTS,
      })
      .then(response => {
        setRestaurants(response.data.search.business);
      });
  }, []);

  useEffect(() => {
    searchFilters();
    setPriceSelect();
  }, [filterCategory, filterOpenNow, filterPrice]);

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

  function handlePriceFilter(valor: string) {
    setFilterPrice(valor);
    setFilerClean(true);
  }

  function setPriceSelect() {
    switch (filterPrice) {
      case '':
        setPriceCurrent('All');
        break;
      case '1':
        setPriceCurrent('$');
        break;
      case '2':
        setPriceCurrent('$$');
        break;
      case '3':
        setPriceCurrent('$$$');
        break;
      case '4':
        setPriceCurrent('$$$$');
        break;
      default:
        'All';
    }
  }

  function handleCategoryFilter(category: string) {
    setFilterCategory(category);
    setFilerClean(true);
  }

  function handleCleanFilters() {
    setFilterCategory('');
    setFilterOpenNow(false);
    setFilterPrice('');
    setFilerClean(false);
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
              <input
                type="radio"
                name="open"
                id="open"
                checked={filterOpenNow}
                onClick={() => {
                  setFilerClean(true);
                  setFilterOpenNow(true);
                }}
              />
              Open Now
            </label>
          </div>

          <div className="dropdownPrice">
            <span>{priceCurrent}</span>
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
            <span>{filterCategory === '' ? 'All' : filterCategory}</span>
            <div className="dropdown-content">
              <button type="button" onClick={() => handleCategoryFilter('')}>
                All
              </button>
              <button
                type="button"
                onClick={() => handleCategoryFilter('italian')}
              >
                Italian
              </button>
              <button
                type="button"
                onClick={() => handleCategoryFilter('seafood')}
              >
                Seafood
              </button>
              <button
                type="button"
                onClick={() => handleCategoryFilter('steakhouses')}
              >
                Steakhouses
              </button>
              <button
                type="button"
                onClick={() => handleCategoryFilter('jpanese')}
              >
                Japanese
              </button>
              <button
                type="button"
                onClick={() => handleCategoryFilter('american')}
              >
                American
              </button>
              <button
                type="button"
                onClick={() => handleCategoryFilter('mexican')}
              >
                Mexican
              </button>
              <button
                type="button"
                onClick={() => handleCategoryFilter('thai')}
              >
                Thai
              </button>
            </div>
          </div>
        </div>

        <ButtonFilter
          nofilter={filterClean}
          onClick={() => handleCleanFilters()}
        >
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
                          {restaurant.hours[0] &&
                          restaurant.hours[0].is_open_now
                            ? 'open'
                            : 'closed'}
                        </span>
                      ) : (
                        <span className="status">
                          {restaurant.hours[0] &&
                          restaurant.hours[0].is_open_now
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
