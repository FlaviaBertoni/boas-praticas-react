import styled from 'styled-components';
import { FontSizeType, FontWeightType } from '../../../common/types';
import theme, { ThemeColorsKeys } from '../../../styles/theme';
import fontSizeSelector from '../../../utils/font-size-selector';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  height?: string;
  width?: string;
  border?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  weight?: FontWeightType;
  color?: ThemeColorsKeys;
  fontSize?: FontSizeType;
  lineHeight?: string;
  bgColor?: ThemeColorsKeys;
}

const Input = styled.input<InputProps>`
  height: ${({ height }) => (height ? height : 'auto')};
  width: ${({ width }) => (width ? width : '100%')};
  border: ${({ border }) => (border ? border : 'none')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  font-size: ${({ fontSize }) => fontSizeSelector(fontSize)};
  font-weight: ${({ weight }) => weight ?? 'normal'};
  line-height: ${({ lineHeight }) => lineHeight ?? '1.2'};
  && {
    color: ${({ color }) => theme.getColorCode(color)};
    background-color: ${({ bgColor = 'white' }) => theme.getColorCode(bgColor)};
  }
`;

export default Input;
