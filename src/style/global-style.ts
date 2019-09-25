import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Maven+Pro&display=swap');
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input,
  button {
    &:focus,
    &:active {
      outline: 0;
    }
  }
   h1,h2,h3,h4,h5,h6{
      font-family:'Maven Pro', sans-serif;
  }
`;