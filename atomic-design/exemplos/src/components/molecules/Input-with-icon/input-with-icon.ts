import styled from 'styled-components';
import Box from '../../atoms/Box';

export const Container = styled(Box)`
  & > button {
    background: none;
    border: 0;
    cursor: pointer;
  }
`;
