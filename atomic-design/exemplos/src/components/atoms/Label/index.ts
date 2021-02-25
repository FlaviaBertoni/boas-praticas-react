import styled from 'styled-components';
import { ThemeColorsKeys } from '../../../styles/theme';

export type labelSize = 'small' | 'medium' | 'large' | 'extra-large';
export type labelWeight = 'normal' | 'bold';
interface LabelProps {
  size?: labelSize;
  color?: ThemeColorsKeys;
  weight?: labelWeight;
}

const fontSize = {
  small: '1rem',
  medium: '1.5rem',
  large: '2.25rem',
  'extra-large': '3rem',
};

const Label = styled.label<LabelProps>`
  font-size: ${({ size }) => fontSize[size || 'small']};
  color: ${({ color, theme }) => theme.getColorCode(color)};
  font-weight: ${({ weight }) => (!weight ? 'normal' : weight)};
  cursor: inherit;
`;

export default Label;