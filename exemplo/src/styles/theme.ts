const colors = {
  white: '#fff',
  black: '#000',
  primary: '#7E7EB8',
  dark: '#2C2E33',
  disable: '#747A88',
  'card-bg': '#F8F8FA',
  transparent: 'transparent',
};

const getColorCode = (color?: ThemeColorsKeys) => colors[color || 'primary'];

const isDarkColor = (color?: ThemeColorsKeys) =>
  ![colors.white, colors.disable].includes(getColorCode(color) || colors.primary);

const theme = { colors, getColorCode, isDarkColor };

export type ThemeType = typeof theme;
export type ThemeColorsType = typeof colors;
export type ThemeColorsKeys = keyof ThemeColorsType;

export default theme;
