import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export default Button;

const RedButton = styled(Button)`
  background-color: var(--active-main);
  color: var(--text-main);
  font-family: 'Special Elite';
  font-size: 18px;
  padding: 12px 10px 10px 10px;
  width: 80px;
  justify-self: center;
  &:active {
    transform: scale(0.85);
  }
`;
export { RedButton };

const PinkButton = styled(Button)`
  background-color: var(--active-secondary);
  color: var(--text-main);
  font-family: 'Indie Flower';
  font-size: 22px;
  padding: 12px 10px 10px 10px;
  width: 120px;
  margin: 25px 0px 90px;
  &:active {
    transform: scale(0.85);
  }
`;
export { PinkButton };
