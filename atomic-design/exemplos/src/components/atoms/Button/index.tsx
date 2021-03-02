import { ThemeColorsKeys } from '../../../styles/theme';
import { ContainedButton, OutlinedButton, TextButton } from './styles';

export type ButtonVariants = 'text' | 'outlined' | 'contained';
interface ButtonProps {
  color?: ThemeColorsKeys;
  variant?: ButtonVariants;
  width?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant, color, width, className, children }) => {
  const buttonVariant = variant || 'outlined';
  return (
    <>
      {buttonVariant === 'contained' && (
        <ContainedButton color={color} width={width} className={className}>
          {children}
        </ContainedButton>
      )}
      {buttonVariant === 'outlined' && (
        <OutlinedButton color={color} width={width} className={className}>
          {children}
        </OutlinedButton>
      )}
      {buttonVariant === 'text' && (
        <TextButton color={color} width={width} className={className}>
          {children}
        </TextButton>
      )}
    </>
  );
};

export default Button;
