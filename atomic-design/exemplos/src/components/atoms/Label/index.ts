import styled from 'styled-components';
import { ThemeColorsKeys } from '../../../styles/theme';

export type labelSize = 'small' | 'medium' | 'large' | 'extra-large';
export type labelWeight = 'normal' | 'bold';
interface LabelProps extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  size?: labelSize;
  color?: ThemeColorsKeys;
  weight?: labelWeight;
  margin?: string;
  padding?: string;
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
  margin: ${({ margin }) => (margin ? margin : 'unset')};
  padding: ${({ padding }) => (padding ? padding : 'unset')};
  cursor: inherit;
`;

export default Label;
