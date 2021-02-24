import { ThemeColorsKeys } from '../../../styles/theme';
import { ContainedButton, OutlinedButton, TextButton } from './styles';

type variantType = 'text' | 'outlined' | 'contained';

interface ButtonProps {
  color?: ThemeColorsKeys;
  variant?: variantType;
  size?: 'small' | 'large';
}

const Button: React.FC<ButtonProps> = ({ variant, color, size, children }) => {
  const buttonVariant = variant || 'outlined';
  return (
    <>
      {buttonVariant === 'contained' && (
        <ContainedButton color={color} size={size}>
          {children}
        </ContainedButton>
      )}
      {buttonVariant === 'outlined' && (
        <OutlinedButton color={color} size={size}>
          {children}
        </OutlinedButton>
      )}
      {buttonVariant === 'text' && (
        <TextButton color={color} size={size}>
          {children}
        </TextButton>
      )}
    </>
  );
};

export default Button;
