import styled from 'styled-components';

import { BoxProps } from '.';
import theme from '../../../styles/theme';

// this is another way to writing CSS with Styled-Component
// https://styled-components.com/docs/advanced#style-objects
// This is not a good pattern.
export const Container = styled.div<BoxProps>(
  ({
    bgColor,
    margin,
    padding,
    width,
    height,
    border,
    borderRadius,
    direction,
    alignItems,
    alignContent,
    justifyItems,
    justifyContent,
  }) => ({
    display: 'flex',
    flexDirection: direction,
    alignItems,
    alignContent,
    justifyItems,
    justifyContent,
    width,
    height,
    margin,
    padding,
    backgroundColor: bgColor ? theme.getColorCode(bgColor) : 'unset',
    border,
    borderRadius,
  }),
);

// export const Container = styled.div<BoxProps>`
//   display: flex;
//   background-color: ${({bgColor}) => bgColor};
//   margin: ${({margin}) => margin};
//   padding: ${({padding}) => padding};
//   border: ${({border}) => border};
//   flex-direction: ${({direction}) => direction};
// `;
