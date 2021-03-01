import styled from 'styled-components';
import { ImageProps } from '.';
export const Container = styled.div<Omit<ImageProps, 'imgPath' | 'alt'>>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};

  img {
    width: 100%;
    height: 100%;
    object-fit: ${({ objectFit }) => objectFit};
  }
`;
