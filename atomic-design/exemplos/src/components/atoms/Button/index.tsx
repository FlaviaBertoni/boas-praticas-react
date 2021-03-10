import { ThemeColorsKeys } from '../../../styles/theme';
import { ContainedButton, OutlinedButton, TextButton } from './styles';

export type ButtonVariants = 'text' | 'outlined' | 'contained';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ThemeColorsKeys;
  variant?: ButtonVariants;
  width?: string;
  margin?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ variant, color, width, className, children, margin, onClick, ...rest }) => {
  const buttonVariant = variant || 'outlined';
  return (
    <>
      {buttonVariant === 'contained' && (
        <ContainedButton onClick={onClick} color={color} width={width} margin={margin} className={className} {...rest}>
          {children}
        </ContainedButton>
      )}
      {buttonVariant === 'outlined' && (
        <OutlinedButton onClick={onClick} color={color} width={width} margin={margin} className={className} {...rest}>
          {children}
        </OutlinedButton>
      )}
      {buttonVariant === 'text' && (
        <TextButton onClick={onClick} color={color} width={width} margin={margin} className={className} {...rest}>
          {children}
        </TextButton>
      )}
    </>
  );
};

export default Button;
