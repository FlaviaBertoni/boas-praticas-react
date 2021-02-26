import styled from 'styled-components';
import { CardProps } from '.';

// this is another way to writing CSS with Styled-Component
// https://styled-components.com/docs/advanced#style-objects
// This is not a good pattern.
export const Container = styled.div<CardProps>(
  ({ bgColor, margin, padding, width, height, border, borderRadius, direction }) => ({
    display: 'flex',
    flexDirection: direction,
    width,
    height,
    margin,
    padding,
    backgroundColor: bgColor,
    border,
    borderRadius,
  }),
);

// export const Container = styled.div<CardProps>`
//   display: flex;
//   background-color: ${({bgColor}) => bgColor};
//   margin: ${({margin}) => margin};
//   padding: ${({padding}) => padding};
//   border: ${({border}) => border};
//   flex-direction: ${({direction}) => direction};
// `;
