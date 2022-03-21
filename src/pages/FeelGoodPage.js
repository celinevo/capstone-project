import { Link } from 'react-router-dom';
import styled from 'styled-components';
import pinkArrow from '../Images/arrow_pink.svg';

export default function FeelGoodPage() {
  return (
    <Flex>
      <GoBackTop to="/">
        <img
          alt="Red Arrow, if clicked leads back to main page"
          src={pinkArrow}
          width="60"
        />
      </GoBackTop>
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

const GoBackTop = styled(Link)`
  margin: -10px 0px 0px -10px;
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
