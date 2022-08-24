import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    min-height: 100vh;
    font-family: roboto-condensed, sans-serif;
    font-size: ${(p) => p.theme.typography.fontSize.p16};
    font-weight: ${(p) => p.theme.typography.weight.regular};
    background-color: ${(p) => p.theme.palette.base};
  }
  
  #root,
  .main-page {
    min-height: 100vh;
  }
  
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .position-relative {
    position: relative;
  }
`;
