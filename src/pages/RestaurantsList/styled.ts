import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 42px 24px 44px;

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
