import styled from 'styled-components';

export const Home = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row-reverse;
    align-items: center;
  }
`;
