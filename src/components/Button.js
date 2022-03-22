import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 6px;
`;

export default Button;

const RedButton = styled(Button)`
  background-color: var(--red);
  color: var(--lightgray);
  font-family: 'Special Elite';
  font-size: 18px;
  padding: 12px 10px 10px 10px;
  width: 80px;
  justify-self: center;
`;
export { RedButton };

const PinkButton = styled(Button)`
  background-color: var(--hotpink);
  color: var(--lightgray);
  font-family: 'Indie Flower';
  font-size: 22px;
  padding: 12px 10px 10px 10px;
  width: 120px;
  margin: 20px 0px 60px 0px;
`;
export { PinkButton };
