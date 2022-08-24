import React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/global.styled';
import { Reset } from 'styled-reset';
import { theme } from './theme/theme';

import { Layout } from './layout/Layout';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Reset />
            <GlobalStyles />
            <Layout />
        </ThemeProvider>
    );
};

export default App;
