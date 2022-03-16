import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  box-sizing: border-box;
};

body {
  margin: 0;
  font-family: 'Special Elite';
  letter-spacing: 1px;
  font-size: 18px;
  line-height: 1.5;
  color: #E6E6E6;
  background-color: #261b1b;
}

h1, h2 {
  font-family: 'Creepster', cursive;
}

input {
  background-color: transparent;
  color: #e6e6e6;
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
  color: #e6e6e6;
}
`;
