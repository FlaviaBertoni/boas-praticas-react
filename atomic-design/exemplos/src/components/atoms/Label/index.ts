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
  small: '16px',
  medium: '24px',
  large: '36px',
  'extra-large': '48px',
};

const Label = styled.label<LabelProps>`
  font-size: ${({ size }) => fontSize[size || 'small']};
  color: ${({ color, theme }) => theme.getColorCode(color)};
  font-weight: ${({ weight }) => (!weight ? 'normal' : weight)};
  cursor: inherit;
`;

export default Label;
