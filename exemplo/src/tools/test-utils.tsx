import { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { MemoryRouter } from 'react-router';
import AuthProvider from '../context/AuthContext';

const AllTheProviders: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter>
        <AuthProvider>{children}</AuthProvider>
      </MemoryRouter>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
