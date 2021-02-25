import styled from 'styled-components';
import { ThemeColorsKeys } from '../../../styles/theme';

interface LabelProps {
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  color?: ThemeColorsKeys;
  weight?: 'normal' | 'bold';
}

const fontSize = {
  small: '1rem',
  medium: '1.5rem',
  large: '2.25rem',
  'extra-large': '3rem',
};

export const Label = styled.label<LabelProps>`
  font-size: ${({ size }) => (!size ? 'small' : fontSize[size])};
  color: ${({ color, theme }) => theme.getColorCode(color)};
  font-weight: ${({ weight }) => (!weight ? 'normal' : weight)};
`;
