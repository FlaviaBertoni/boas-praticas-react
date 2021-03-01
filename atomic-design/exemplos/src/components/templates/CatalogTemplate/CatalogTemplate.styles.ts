import styled from 'styled-components';
import Label from '../../atoms/Label';

export const Subtitle = styled(Label)`
  margin-top: 4px;
`;

export const Container = styled.main`
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
`;

export const GridItems = styled.div`
  margin-top: 48px;
  width: 100%;
  display: grid;
  gap: 2rem;

  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));

  /* @media (min-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  } */
`;
