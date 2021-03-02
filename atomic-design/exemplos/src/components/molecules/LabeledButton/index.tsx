import React from 'react';
import theme, { ThemeColorsKeys } from '../../../styles/theme';
import Button, { ButtonVariants } from '../../atoms/Button';
import Label, { labelSize } from '../../atoms/Label';

export type LabeledButtonSizes = 'small' | 'large';

interface LabeledButtonProps {
  size: LabeledButtonSizes;
  variant: ButtonVariants;
  color?: ThemeColorsKeys;
  className?: string;
}

const LabeledButton: React.FC<LabeledButtonProps> = ({ children, size, variant, color, className }) => {
  const buttonWidth = size === 'large' ? '224px' : '112px';
  const labelSize: labelSize = size === 'large' ? 'medium' : 'small';
  const labelColor: ThemeColorsKeys | undefined =
    variant === 'contained' ? (theme.isDarkColor(color) ? 'white' : 'black') : color;

  return (
    <Button width={buttonWidth} variant={variant} color={color} className={className}>
      <Label size={labelSize} weight="bold" color={labelColor}>
        {children}
      </Label>
    </Button>
  );
};

export default LabeledButton;
