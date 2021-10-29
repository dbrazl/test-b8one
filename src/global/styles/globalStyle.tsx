import { createGlobalStyle } from 'styled-components';
import { Colors } from './colors';

export default createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    margin: 0;
    outline: 0;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    text-decoration: none;
  }

  p, textarea, h1, h2, h3, h4, h5, h6 {
    color: ${Colors.DarkGrey};
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    background: ${Colors.LightGrey};
  }
`;
