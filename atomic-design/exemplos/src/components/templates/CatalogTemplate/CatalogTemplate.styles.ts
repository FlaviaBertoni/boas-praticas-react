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
  place-content: center;

  grid-template-columns: repeat(auto-fill, minmax(270px, 277px));
`;
