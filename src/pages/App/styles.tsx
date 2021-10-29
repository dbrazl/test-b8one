import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin: 100px 0;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1000px) {
    width: 80%;
  }

  @media (min-width: 1088px) {
    width: 1000px;
    justify-content: unset;
  }
`;
