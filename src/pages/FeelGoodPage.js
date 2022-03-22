import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import pinkArrow from '../Images/arrow_pink.svg';
import { PinkButton } from '../components/Button';

export default function FeelGoodPage() {
  const navigate = useNavigate();
  const [catUrl, setCatUrl] = useState(null);

  return (
    <Flex>
      <GoBackButton onClick={() => navigate(-1)}>
        <img
          alt="Red Arrow, if clicked leads back to main page"
          src={pinkArrow}
          width="60"
        />
      </GoBackButton>
      <Header>Scared? Not anymore!</Header>
      <CatContainer>
        <img
          src={catUrl?.url}
          alt="Press the button below to see cute cats!"
          width="300px"
        />
        <PinkButton onClick={fetchCatImages}>Press for a cute cat!</PinkButton>
      </CatContainer>
    </Flex>
  );

  async function fetchCatImages() {
    try {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search'
      );
      const data = await response.json();
      setCatUrl(data[0]);
    } catch (error) {
      console.log(error);
    }
  }
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
  margin: -40px 5px 15px 5px;
  color: var(--brown);
  font-family: 'Indie Flower';
`;

const CatContainer = styled.div`
  display: grid;
  justify-items: center;
  font-size: 22px;
  color: var(--brown);
  font-family: 'Indie Flower';
`;
