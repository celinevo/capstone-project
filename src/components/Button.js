import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 6px;
  padding: 12px 10px 10px 10px;
  color: var(--text-main);
  cursor: pointer;
  &:active {
    transform: scale(0.85);
  }
`;

export default Button;

const RedButton = styled(Button)`
  background-color: var(--active-main);
  font-family: 'Special Elite';
  font-size: 18px;
  width: 80px;
  justify-self: center;
`;
export { RedButton };

const PinkButton = styled(Button)`
  background-color: var(--active-secondary);
  font-family: 'Indie Flower';
  font-size: 22px;
  width: 120px;
  margin: 25px 0px 90px;
`;
export { PinkButton };
