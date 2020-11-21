import { gql } from '@apollo/client';

export const LIST_RESTAURANTS = gql`
  query Filters($categories: String, $price: String) {
    search(location: "las-vegas", categories: $categories, price: $price) {
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

export const LIST_CATEGORIES = gql`
  query {
    categories {
      category {
        title
      }
    }
  }
`;
