import styled from 'styled-components';
import { FontSizeType, FontWeightType } from '../../../common/types';
import { ThemeColorsKeys } from '../../../styles/theme';
import fontSizeSelector from '../../../utils/font-size-selector';
interface LabelProps extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  size?: FontSizeType;
  color?: ThemeColorsKeys;
  weight?: FontWeightType;
  margin?: string;
  padding?: string;
}

const Label = styled.label<LabelProps>`
  font-size: ${({ size }) => fontSizeSelector(size)};
  color: ${({ color, theme }) => theme.getColorCode(color)};
  font-weight: ${({ weight }) => (!weight ? 'normal' : weight)};
  margin: ${({ margin }) => (margin ? margin : 'unset')};
  padding: ${({ padding }) => (padding ? padding : 'unset')};
  cursor: inherit;
`;

export default Label;
