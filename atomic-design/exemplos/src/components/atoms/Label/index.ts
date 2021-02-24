import styled from 'styled-components';
import { ThemeColorsKeys } from '../../../styles/theme';

interface LabelProps {
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  color?: ThemeColorsKeys;
  weight?: 'normal' | 'bold';
}

const fontSize = {
  small: '16px',
  medium: '24px',
  large: '36px',
  'extra-large': '48px',
};

export const Label = styled.label<LabelProps>`
  font-size: ${({ size }) => (!size ? 'small' : fontSize[size])};
  color: ${({ color, theme }) => theme.getColorCode(color)};
  font-weight: ${({ weight }) => (!weight ? 'normal' : weight)};
`;
