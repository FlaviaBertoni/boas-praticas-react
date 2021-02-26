import { ThemeColorsType } from '../../../styles/theme';
import { Container } from './Card.styles';

export interface CardProps {
  direction?: 'column' | 'row';
  borderRadius?: string;
  bgColor?: keyof ThemeColorsType | 'unset';
  padding?: string;
  margin?: string;
  border?: string;
  width?: string;
  height?: string;
}

const Card: React.FC<CardProps> = ({
  direction = 'row',
  borderRadius = 'inhehit',
  bgColor = 'unset',
  padding = 'unset',
  margin = 'unset',
  border = 'none',
  width = 'auto',
  height = 'auto',
  children,
}) => {
  return (
    <Container
      direction={direction}
      borderRadius={borderRadius}
      bgColor={bgColor}
      padding={padding}
      margin={margin}
      border={border}
      width={width}
      height={height}
    >
      {children}
    </Container>
  );
};

export default Card;
