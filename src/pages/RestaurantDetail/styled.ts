import styled, { css } from 'styled-components';

interface HeaderProps {
  open: boolean;
}

interface MapProps {
  map: boolean;
}

interface ListReviewProps {
  img: string;
}

interface FotosProps {
  img: string;
}

export const Header = styled.header<HeaderProps>`
  padding: 36px 64px 48px;
  border-bottom: 2px solid #e6e6e6;

  > h1 {
    font-family: Helvetica-Light;
    font-size: 54px;
    font-size: 2.7rem;
    color: #333333;
    letter-spacing: 0.96px;
    line-height: 64px;
    margin-bottom: 16px;
  }

  .react-rater {
    font-size: 1.45rem;
    margin-bottom: 23px;
  }
  .react-rater-star.is-disabled.is-active {
    color: #002b56;
  }
  .react-rater-star.is-active-half:before {
    color: #002b56;
  }

  .restStatus {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;

    > span {
      font-family: Helvetica-Nue;
      font-size: 22px;
      font-size: 1.1rem;
      color: #666666;
      letter-spacing: 0.92px;
      line-height: 32px;
      text-transform: capitalize;
    }

    > .status::before {
      content: '';
      background: ${props => (props.open ? '#00E8A4' : '#ff3548')};
      width: 15px;
      height: 15px;
      display: inline-block;
      margin-right: 5px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }

  @media only screen and (max-width: 425px) {
    padding: 42px 24px 40px;
    border-bottom: none;

    > h1 {
      font-size: 34px;
      font-size: 1.6rem;
      margin-bottom: 0px;
    }

    .react-rater {
      font-size: 1rem;
      margin-bottom: 8px;
    }

    .restStatus {
      > span {
        font-size: 12px;
        font-size: 0.6rem;
        text-transform: uppercase;
      }

      > .status::before {
        width: 8px;
        height: 8px;
      }
    }
  }
`;

export const Map = styled.div<MapProps>`
  display: ${props => (props.map ? 'flex' : 'none')};
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 48px 64px;
  border-bottom: 2px solid #e6e6e6;

  .map {
    width: 73%;
    height: 228px;
  }

  .endereco {
    font-family: Helvetica-Light;
    font-size: 20px;
    font-size: 1rem;
    color: #000000;
    letter-spacing: 1px;
    line-height: 28px;
    margin-top: 15px;
  }

  @media only screen and (max-width: 425px) {
    justify-content: initial;
    padding: 0;

    .map {
      order: -2;
      width: 100%;
    }
    .fotos {
      width: 84%;
      margin-bottom: 40px;
      display: none;
    }
    .endereco {
      width: 100%;
      order: -1;
      padding: 20px 24px 40px;
      margin-top: 0px;
      font-size: 18px;
      font-size: 0.9rem;
    }
  }
`;

export const Review = styled.section`
  display: flex;
  padding: 48px 64px;
  flex-wrap: wrap;

  > span {
    width: 100%;
    font-family: Helvetica-Light;
    font-size: 22px;
    color: #666666;
    letter-spacing: 0.92px;
    line-height: 32px;
    margin-bottom: 48px;
  }
  @media only screen and (max-width: 425px) {
    padding: 40px 24px;

    > span {
      margin-bottom: 32px;
      font-size: 18px;
      font-size: 0.9rem;
    }
  }
`;

export const ListReview = styled.div<ListReviewProps>`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 80px;
  margin-bottom: 80px;

  .user {
    display: flex;
    width: 20%;
    justify-content: space-between;

    .imagem {
      width: 80px;
      height: 80px;
      ${props =>
        props.img
          ? css`
              background-image: url(${props.img});
            `
          : css`
              background: #d8d8d8;
            `}
      background-repeat: no-repeat;
      background-size: cover;
    }

    > span {
      display: flex;
      flex-direction: column;

      font-family: Helvetica-Nue;
      font-size: 22px;
      font-size: 1.1rem;
      color: #000000;
      letter-spacing: 0.92px;
      line-height: 24px;

      > small {
        font-family: Helvetica-Light;
        font-size: 16px;
        font-size: 0.8rem;
        color: #666666;
        letter-spacing: 0;
        line-height: 24px;
        margin-top: 6px;
      }
    }
  }

  .coment {
    display: flex;
    flex-direction: column;
    max-width: 78%;
    flex-shrink: 2;

    > span {
      font-family: Helvetica-Light;
      font-size: 20px;
      font-size: 1rem;
      color: #000000;
      letter-spacing: 1px;
      line-height: 28px;
      text-align: justify;
    }
  }

  .react-rater {
    font-size: 1rem;
    margin-bottom: 20px;
  }
  .react-rater-star.is-disabled.is-active {
    color: #002b56;
  }
  .react-rater-star.is-active-half:before {
    color: #002b56;
  }

  @media only screen and (max-width: 1024px) {
    .coment {
      max-width: 70%;
    }
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    padding-bottom: 40px;
    margin-bottom: 32px;

    .user {
      width: 100%;
      justify-content: normal;
      margin-bottom: 16px;

      > span {
        margin-left: 18px;
      }
    }

    .coment {
      max-width: 100%;
    }
  }

  .react-rater {
    font-size: 1.5rem;
    margin-bottom: 24px;
  }
`;

export const Fotos = styled.div<FotosProps>`
  width: 25%;
  height: 228px;

  background: #d8d8d8;
  background-image: url(${props => `${props.img}`});
  background-repeat: no-repeat;
  background-size: cover;
`;
