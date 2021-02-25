import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import Home from './pages/Home';
import theme from './styles/theme';
import CatalogTemplate from './components/templates/CatalogTemplate';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <CatalogTemplate title="Catálogo" subtitle="Alugue o carro dos seus sonhos">
        <h1>Item</h1>
        <h1>Item</h1>
        <h1>Item</h1>
        <h1>Item</h1>
        <h1>Item</h1>
        <h1>Item</h1>
        <h1>Item</h1>
        <h1>Item</h1>
        <h1>Item</h1>
        <h1>Item</h1>
      </CatalogTemplate>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
