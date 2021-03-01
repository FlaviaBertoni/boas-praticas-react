import { ThemeColorsType } from '../../../styles/theme';
import { Container } from './Box.styles';

export interface BoxProps {
  direction?: 'column' | 'row';
  alignItems?: 'normal' | 'stretch' | 'center' | 'start' | 'end';
  alignContent?: 'normal' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  justifyItems?: 'normal' | 'stretch' | 'center' | 'start' | 'end';
  justifyContent?: 'normal' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  borderRadius?: string;
  bgColor?: keyof ThemeColorsType | 'unset';
  padding?: string;
  margin?: string;
  border?: string;
  width?: string;
  height?: string;
}

const Box: React.FC<BoxProps> = ({
  direction = 'row',
  alignItems = 'normal',
  alignContent = 'normal',
  justifyContent = 'normal',
  justifyItems = 'normal',
  borderRadius = 'inhehit',
  bgColor = 'unset',
  padding = 'unset',
  margin = 'unset',
  border = 'none',
  width = 'auto',
  height = 'auto',
  children,
}) => (
  <Container
    direction={direction}
    borderRadius={borderRadius}
    bgColor={bgColor}
    padding={padding}
    margin={margin}
    border={border}
    width={width}
    height={height}
    alignItems={alignItems}
    alignContent={alignContent}
    justifyContent={justifyContent}
    justifyItems={justifyItems}
  >
    {children}
  </Container>
);

export default Box;
