import styled from 'styled-components';
import Box from '../../atoms/Box';
import Label from '../../atoms/Label';

export const Container = styled(Box)`
  ul {
    display: flex;
  }
  li:not(:first-child) {
    margin-left: 2rem;
  }
`;

export const LinkLabel = styled(Label)`
  cursor: pointer;

  &.selected {
    font-weight: bold;
  }
`;
