import { createGlobalStyle } from 'styled-components';
import Tokens from './Tokens';

export const GlobalStyles = createGlobalStyle`
  /* Mobile Styles */
  @media ${Tokens.mobile} {
    html {
      font-size: 100%;
    }
  }

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
    font-family: 'Work Sans', sans-serif;
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
