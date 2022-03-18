import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  box-sizing: border-box;
};

:root {
  --lightgray: #e6e6e6;
  --gray: #4d4d4d;
  --red: #990000;
  --darkred: #261b1b;
  --black: rgba(0, 0, 0, 0.4);
}

body {
  margin: 0;
  font-family: 'Special Elite';
  letter-spacing: 1px;
  font-size: 18px;
  line-height: 1.5;
  color: var(--lightgray);
  background-color: var(--darkred);
}

h1, h2 {
  font-family: 'Creepster', cursive;
}

input {
  background-color: transparent;
  color: var(--lightgray);
  font-family: 'Special Elite';
  letter-spacing: 1px;
  font-size: 18px;
  line-height: 1.4;
}

textarea {
  background-color: transparent;
  font-family: 'Special Elite';
  letter-spacing: 1px;
  font-size: 18px;
  line-height: 1.5;
  color: var(--lightgray);
}
`;
