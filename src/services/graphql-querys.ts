import { gql } from '@apollo/client';

export const LIST_RESTAURANTS = gql`
  query Filters($categories: String, $price: String, $offset: Int) {
    search(
      location: "las-vegas"
      categories: $categories
      price: $price
      offset: $offset
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

export const LIST_CATEGORIES = gql`
  query {
    categories {
      category {
        title
      }
    }
  }
`;
