import styled from 'styled-components';
import { ThemeColorsType } from '../../../styles/theme';

interface LabelProps {
  size: 'small' | 'medium' | 'large' | 'extra-large';
  color?: keyof ThemeColorsType;
  weight?: 'normal' | 'bold' | '400' | '700';
}

const fontSize = {
  small: '16px',
  medium: '24px',
  large: '36px',
  'extra-large': '48px',
};

export const Label = styled.label<LabelProps>`
  font-size: ${({ size }) => fontSize[size]};
  color: ${({ color, theme }) =>
    !color ? theme.colors.primary : theme.colors[color]};
  font-weight: ${({ weight }) => (!weight ? 'normal' : weight)};
`;
