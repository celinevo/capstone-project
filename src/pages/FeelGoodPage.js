import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import pinkArrow from '../Images/arrow_pink.svg';

export default function FeelGoodPage() {
  const navigate = useNavigate();
  return (
    <Flex>
      <GoBackButton onClick={() => navigate(-1)}>
        <img
          alt="Red Arrow, if clicked leads back to main page"
          src={pinkArrow}
          width="60"
        />
      </GoBackButton>
      <Header>Scared?</Header>
      <Text>
        Don't worry!
        <br />
        The monsters under your bed are not that bad...
        <br />
        You should be more worried about the monsters in your closet!
      </Text>
    </Flex>
  );
}

const Flex = styled.section`
  display: flex;
  padding: 20px;
  flex-direction: column;
  background-color: var(--pink);
`;

const GoBackButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-start;
  margin: -10px 0px 0px -10px;
  z-index: 2;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 35px;
  margin: -40px 5px 5px 5px;
  color: var(--brown);
  font-family: 'Indie Flower', cursive;
`;

const Text = styled.p`
  font-size: 22px;
  color: var(--brown);
  font-family: 'Indie Flower', cursive;
`;
