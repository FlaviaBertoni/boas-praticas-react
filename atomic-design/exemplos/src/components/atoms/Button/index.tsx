import { ThemeColorsKeys } from '../../../styles/theme';
import { ContainedButton, OutlinedButton, TextButton } from './styles';

export type ButtonVariants = 'text' | 'outlined' | 'contained';
interface ButtonProps {
  color?: ThemeColorsKeys;
  variant?: ButtonVariants;
  width?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ variant, color, width, className, children, onClick }) => {
  const buttonVariant = variant || 'outlined';
  return (
    <>
      {buttonVariant === 'contained' && (
        <ContainedButton onClick={onClick} color={color} width={width} className={className}>
          {children}
        </ContainedButton>
      )}
      {buttonVariant === 'outlined' && (
        <OutlinedButton onClick={onClick} color={color} width={width} className={className}>
          {children}
        </OutlinedButton>
      )}
      {buttonVariant === 'text' && (
        <TextButton onClick={onClick} color={color} width={width} className={className}>
          {children}
        </TextButton>
      )}
    </>
  );
};

export default Button;
