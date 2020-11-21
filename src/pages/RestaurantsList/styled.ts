import styled from 'styled-components';

interface RestItemProps {
  img: string;
  open: boolean;
}

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 42px 24px 0;

  > h1 {
    font-size: 32px;
    font-size: 1.6rem;
    color: #333333;
    letter-spacing: 0.96px;
    line-height: 64px;
  }

  > p {
    max-width: 752px;
    margin: 9px 0px 42px;
    font-family: Helvetica-Light;
    font-size: 16px;
    font-size: 0.8rem;
    color: #666666;
    letter-spacing: 0.92px;
    line-height: 32px;
  }

  @media only screen and (min-width: 504px) {
    padding: 36px 64px 0;

    > h1 {
      font-size: 54px;
      font-size: 2.7rem;
    }

    > p {
      font-size: 22px;
      font-size: 1.1rem;
      margin: 24px 0px 36px;
    }
  }
`;

export const ContainerListRest = styled.section`
  padding: 32px 24px 48px;

  > h2 {
    margin-bottom: 32px;
    font-size: 32px;
    font-size: 1.6rem;
    color: #333333;
    letter-spacing: 1px;
    line-height: 40px;
  }

  > div {
    display: flex;
    justify-content: center;
    margin-top: 48px;

    > button {
      font-family: Helvetica-Medium;
      font-size: 14px;
      font-size: 0.7rem;
      color: #002b53;
      letter-spacing: 1px;
      text-align: center;
      line-height: 16px;

      width: 70%;
      padding: 15px 0px 17px;
      color: #002b53;
      background: #fff;
      border: 1px solid #002b56;
      border-radius: 2px;
      text-transform: uppercase;
      transition: all linear 0.2s;

      :hover {
        background: #002b53;
        color: #fff;
      }
    }
  }
  @media only screen and (min-width: 504px) {
    padding: 64px 64px 80px;

    > h2 {
      margin-bottom: 43px;
      font-size: 34px;
      font-size: 1.7rem;
    }

    > div {
      margin-top: 0;

      > button {
        padding: 15px 167px 17px;
        background: #fff;
        border: 2px solid #002b56;
        border-radius: 2px;
        transition: all linear 0.2s;

        :hover {
          background: #002b53;
          color: #fff;
        }
      }
    }
  }
`;

export const ListRestaurants = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  li:nth-child(4n) {
    margin-right: 0;
  }
`;

export const RestItem = styled.li<RestItemProps>`
  display: flex;
  flex-direction: column;
  width: 23%;
  margin: 0 2.6% 6% 0;
  transition: box-shadow linear 0.2s;
  border: 1px solid #d4d2d2;
  padding: 10px;
  border-radius: 4px;

  :hover {
    box-shadow: 3px 6px 20px #888888;
  }
  .imagem {
    width: 100%;
    height: 228px;
    background-image: url(${props => `${props.img}`});
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 16px;
  }

  .infoRest {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  h3 {
    font-family: Helvetica-Nue;
    font-size: 19px;
    font-size: 0.95rem;
    color: #000000;
    letter-spacing: 1px;
    line-height: 28px;
    margin-bottom: 8px;
    flex-grow: 1;
  }

  .react-rater {
    display: flex;
    font-size: 1rem;
    margin-bottom: 16px;
    /* flex-grow: 1; */
  }
  .react-rater-star.is-disabled.is-active {
    color: #002b56e0;
  }
  .react-rater-star.is-disabled{
    color: #d4d4d4;
  }
  .react-rater-star.is-active-half:before {
    color: #002b56e0;
  }

  .restStatus {
    display: flex;
    justify-content: space-between;
    /* flex-grow: 1; */
    flex-wrap: wrap;
    margin-bottom: 20px;

    > span {
      font-family: Helvetica-Nue;
      font-size: 12px;
      font-size: 0.6rem;
      color: #757575;
      letter-spacing: 0.5px;
      line-height: 16px;
      text-transform: uppercase;
    }

    > .status::before {
      content: '';
      background: ${props => (props.open ? '#00E8A4' : '#ff3548')};
      width: 8px;
      height: 8px;
      display: inline-block;
      margin-right: 5px;
      border-radius: 50%;
    }
  }

  button {
    padding: 16px 0;
    font-family: Helvetica-Nue;
    font-size: 14px;
    font-size: 0.7rem;
    color: #ffffff;
    letter-spacing: 1px;
    text-align: center;
    line-height: 16px;
    background: #002b56;
    border: none;
    border-radius: 2px;
    transition: background linear 0.2s;

    :hover {
      background: #002b56e0;
    }
  }

  @media only screen and (min-width: 425px) and (max-width: 1440px) {
    .imagem {
      height: 150px;
    }
    button {
      padding: 12px 0;
    }
  }

  @media only screen and (min-width: 426px) and (max-width: 1024px) {
    h3 {
      font-size: 20px;
      font-size: 1rem;
      width: 180px;
    }
    .react-rater {
      margin-bottom: 8px;
    }
  }

  @media only screen and (max-width: 425px) {
    flex-direction: row;
    width: 100%;
    margin: 0;

    & + li {
      margin-top: 32px;
    }

    h3 {
      text-overflow: ellipsis;
      overflow: hidden;
      height: 30px;
      white-space: nowrap;
      margin-top: -7px;
    }

    .imagem {
      width: 38%;
      height: 132px;
      margin-bottom: 0px;
    }

    .react-rater {
      margin-bottom: 8px;
    }
    .restStatus {
      margin-bottom: 15px;

      .status {
        background: ${props => (props.open ? '#00E8A4' : '#ff3548')};
        border-radius: 8px;
        padding: 0px 5px;
        color: ${props => (props.open ? '#002b56' : '#fff')};
      }

      > .status::before {
        display: none;
      }
    }

    .infoRest {
      width: 60%;
      margin-left: 12px;
    }

    button {
    padding: 0;
    font-size: 16px;
    font-size: 0.8rem;
    color: #002B56;
    letter-spacing: 1px;
    text-align: left;
    line-height: 16px;
    background: transparent;
    border: none;
    transition: background linear 0.2s;

    > span{
      border-bottom: 1px #E6E6E6 solid;

      ::after{
        content: "→";
        font-size: 25px;
        width: 20px;
        height: 20px;
      }
    }

    :hover {
      background: transparent;
    }
  }
`;
