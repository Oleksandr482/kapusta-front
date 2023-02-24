import styled from 'styled-components';

export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    align-items: stretch;
    padding-left: 50px;
    padding-right: 50px;
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1260px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;