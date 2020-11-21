import { gql } from '@apollo/client';

export const LISTAR_RESTAURANTES = gql`
  query {
    search(location: "las-vegas") {
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
    categories(locale: "las-vegas") {
      category {
        title
      }
    }
  }
`;
