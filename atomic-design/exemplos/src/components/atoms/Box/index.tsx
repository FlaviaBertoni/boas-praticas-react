import { ThemeColorsType } from '../../../styles/theme';
import { Container } from './Box.styles';

export interface BoxProps {
  direction?: 'column' | 'row';
  alignItems?: 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'baseline';
  alignContent?: 'normal' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  justifyItems?: 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'baseline';
  justifyContent?: 'normal' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  borderRadius?: string;
  bgColor?: keyof ThemeColorsType;
  padding?: string;
  margin?: string;
  border?: string;
  width?: string;
  height?: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  [key: string]: any;
}

const Box: React.FC<BoxProps> = ({
  direction = 'row',
  alignItems = 'normal',
  alignContent = 'normal',
  justifyContent = 'normal',
  justifyItems = 'normal',
  borderRadius = '0',
  bgColor,
  padding = 'unset',
  margin = 'unset',
  border = 'none',
  width = 'auto',
  height = 'auto',
  as,
  className,
  children,
  ...rest
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
    as={as}
    className={className}
    {...rest}
  >
    {children}
  </Container>
);

export default Box;
