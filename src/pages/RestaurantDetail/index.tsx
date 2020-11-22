import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ReactStars from 'react-stars';
import { parseISO, format } from 'date-fns';

import client from '../../services/apollo';
import { Header, Map, Review, ListReview, Fotos } from './styled';
import { NEW_ONE_RESTAURANT } from '../../services/graphql-querys';
import MAPS from '../../components/Maps/index';

interface RestaurantParams {
  restaurant: string;
}
interface RestaurantProps {
  name: string;
  id: string;
  rating: number;
  price: string;
  review_count: number;
  photos: string;
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
  coordinates: {
    latitude: number;
    longitude: number;
  };
  reviews: [
    {
      id: string;
      rating: number;
      user: {
        name: string;
        image_url: string;
      };
      text: string;
      time_created: string;
    },
  ];
  location: {
    formatted_address: string;
  };
}

const RestaurantDetail: React.FC = () => {
  const { params } = useRouteMatch<RestaurantParams>();
  const [restaurant, setRestaurant] = useState<RestaurantProps | null>(null);

  useEffect(() => {
    client
      .query({
        query: NEW_ONE_RESTAURANT,
        variables: { idRestaurant: params.restaurant },
      })
      .then(response => {
        setRestaurant(response.data.business);
      });
  }, [params.restaurant]);
  return (
    <>
      {restaurant && (
        <>
          <Header open={restaurant.hours[0].is_open_now}>
            <h1>{restaurant.name}</h1>
            <ReactStars
              value={restaurant.rating}
              color1="#dddddd"
              color2="#002b56e0"
              edit={false}
              half
            />
            <div className="restStatus">
              <span>{`${restaurant.categories[0].title} - ${restaurant.price}`}</span>
              <span className="status">
                {restaurant.hours[0].is_open_now ? 'Open Now' : 'Closed'}
              </span>
            </div>
          </Header>
          <Map map>
            <div className="map">
              <MAPS
                lat={restaurant.coordinates.latitude}
                long={restaurant.coordinates.longitude}
              />
            </div>
            <Fotos img={restaurant.photos} className="fotos" />
            <span className="endereco">
              {restaurant.location.formatted_address}
            </span>
          </Map>
          <Review>
            <span>{`${restaurant.review_count} Reviews`}</span>
            {restaurant.reviews.map(review => (
              <ListReview key={review.id} img={review.user.image_url}>
                <div className="user">
                  <div className="imagem" />
                  <span>
                    {review.user.name}
                    <small>
                      {format(parseISO(review.time_created), 'dd/M/yyyy')}
                    </small>
                  </span>
                </div>
                <div className="coment">
                  <ReactStars
                    value={review.rating}
                    color1="#dddddd"
                    color2="#002b56e0"
                    edit={false}
                    half
                  />
                  <span>{review.text}</span>
                </div>
              </ListReview>
            ))}
          </Review>
        </>
      )}
    </>
  );
};

export default RestaurantDetail;
