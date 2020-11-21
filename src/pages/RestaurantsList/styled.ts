import styled from 'styled-components';

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

  @media only screen and (min-width: 432px) {
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
  @media only screen and (min-width: 432px) {
    padding: 64px 64px 80px;

    > h2 {
      margin-bottom: 43px;
      font-size: 34px;
      font-size: 1.7rem;
    }

    > div {
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
