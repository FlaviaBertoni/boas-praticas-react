import { ThemeColorsKeys } from '../../../styles/theme';
import { ContainedButton, OutlinedButton, TextButton } from './styles';

export type ButtonVariants = 'text' | 'outlined' | 'contained';
interface ButtonProps {
  color?: ThemeColorsKeys;
  variant?: ButtonVariants;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({ variant, color, width, children }) => {
  const buttonVariant = variant || 'outlined';
  return (
    <>
      {buttonVariant === 'contained' && (
        <ContainedButton color={color} width={width}>
          {children}
        </ContainedButton>
      )}
      {buttonVariant === 'outlined' && (
        <OutlinedButton color={color} width={width}>
          {children}
        </OutlinedButton>
      )}
      {buttonVariant === 'text' && (
        <TextButton color={color} width={width}>
          {children}
        </TextButton>
      )}
    </>
  );
};

export default Button;
