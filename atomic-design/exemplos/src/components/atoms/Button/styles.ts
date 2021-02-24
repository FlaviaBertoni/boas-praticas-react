import styled from 'styled-components';
import { ThemeColorsKeys } from '../../../styles/theme';

interface ButtonProps {
  color?: ThemeColorsKeys;
  size?: 'small' | 'large';
}

const BaseButton = styled.button<ButtonProps>`
  display: flex;
  margin: 10px;
  border-radius: 16px;
  height: 48px;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => (size === 'large' ? '224px' : '112px')};
`;

export const OutlinedButton = styled(BaseButton)<ButtonProps>`
  border: 1px solid ${({ color, theme }) => theme.getColorCode(color)};
  color: ${({ color, theme }) => theme.getColorCode(color)};
`;

export const TextButton = styled(BaseButton)<ButtonProps>`
  border: 1px solid transparent;
  color: ${({ color, theme }) => theme.getColorCode(color)};
`;

export const ContainedButton = styled(BaseButton)<ButtonProps>`
  border: 1px solid transparent;
  color: ${({ color, theme }) => (theme.isDarkColor(color) ? theme.colors.white : theme.colors.black)};
  background-color: ${({ color, theme }) => theme.getColorCode(color)};
`;
