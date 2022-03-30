import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  box-sizing: border-box;
};

:root {
  --text-main: #e6e6e6;
  --passive: #4d4d4d;
  --active-main: #990000;
  --bg-main: #261b1b;
  --bg-picture: rgba(0, 0, 0, 0.4);
  --text-secondary: #594347;
  --bg-secondary: #F2AEC1;
  --active-secondary: #940059;
}

body {
  margin: 0;
  font-family: 'Special Elite';
  letter-spacing: 1px;
  font-size: 18px;
  line-height: 1.5;
  color: var(--text-main);
  background-repeat: no-repeat;
  background-color: var(--bg-main)
}

h1, h2 {
  font-family: 'Creepster', cursive;
}

input, textarea {
  background-color: transparent;
  color: var(--text-main);
  font-family: 'Special Elite';
  letter-spacing: 1px;
  font-size: 18px;
  line-height: 1.4;
}
`;
