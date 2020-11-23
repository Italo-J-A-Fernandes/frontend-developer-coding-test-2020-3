import { gql } from '@apollo/client';

export const LIST_RESTAURANTS = gql`
  query Filters(
    $categories: String
    $price: String
    $offset: Int
    $open_now: Boolean
  ) {
    search(
      location: "las-vegas"
      categories: $categories
      price: $price
      offset: $offset
      open_now: $open_now
    ) {
      business {
        id
        name
        categories {
          title
        }
        rating
        price
        photos
        hours {
          is_open_now
        }
      }
    }
  }
`;

export const NEW_ONE_RESTAURANT = gql`
  query newOnePlace($idRestaurant: String) {
    business(id: $idRestaurant) {
      name
      rating
      price
      review_count
      photos
      categories {
        title
      }
      location {
        formatted_address
      }
      coordinates {
        latitude
        longitude
      }
      hours {
        is_open_now
      }
      reviews {
        id
        rating
        user {
          name
          image_url
        }
        text
        time_created
      }
    }
  }
`;

export const LIST_CATEGORIES = gql`
  query {
    categories {
      category {
        title
      }
    }
  }
`;
