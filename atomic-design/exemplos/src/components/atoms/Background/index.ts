import styled from 'styled-components';
import Box from '../Box';

interface BackgroundProps {
  url: string;
}

export const Background = styled(Box)<BackgroundProps>`
  flex: 1;
  background: ${({ url }) => `url(${url}) no-repeat center`};
  background-size: cover;
`;
