import styled from 'styled-components';
import { FontSizeType, FontWeightType } from '../../../common/types';
import theme, { ThemeColorsKeys } from '../../../styles/theme';
import fontSizeSelector from '../../../utils/font-size-selector';

interface InputProps {
  height?: string;
  width?: string;
  border?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  size?: FontSizeType;
  weight?: FontWeightType;
  color?: ThemeColorsKeys;
}

const Input = styled.input<InputProps>`
  height: ${({ height }) => (height ? height : 'auto')};
  width: ${({ width }) => (width ? width : '100%')};
  border: ${({ border }) => (border ? border : 'none')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '0')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  font-size: ${({ size }) => fontSizeSelector(size)};
  font-weight: ${({ weight }) => weight ?? 'normal'};
  color: ${({ color }) => theme.getColorCode(color)};
`;

export default Input;
