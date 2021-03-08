import styled from 'styled-components';
import theme from '../../../styles/theme';
import Box from '../../atoms/Box';
import LabeledButton from '../../molecules/LabeledButton';

export const Container = styled(Box)`
  transition: border 100ms;

  & > div,
  section,
  span,
  button {
    pointer-events: none;
  }

  cursor: pointer;

  &:hover {
    border: 2px solid ${theme.colors.primary};
  }
`;

export const Button = styled(LabeledButton)`
  margin: 0;
  padding: 0;
`;
