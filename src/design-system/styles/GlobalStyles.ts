import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Mobile Styles */

  /* Box Sizing */
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  /* HTML and Body Styles */
  html, body {
    min-height: 100vh;
  }

  html {
    min-height: 100vh;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    font-family: 'Open Sans', 'Poppins', 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Text Styles */
  strong, b {
    font-weight: 600;
  }

  /* Role Styles */
  div[role="group"][tabindex] {
    display: block;
    min-height: 100vh;
    position: relative;
  }

  div.integrator {
    border: 0;
  }

  /* Input Styles */
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;
