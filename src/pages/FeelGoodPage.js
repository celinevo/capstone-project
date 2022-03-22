import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import pinkArrow from '../Images/arrow_pink.svg';
import { PinkButton } from '../components/Button';

export default function FeelGoodPage() {
  const navigate = useNavigate();
  const [catUrl, setCatUrl] = useState(null);
  const [hasError, setHasError] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

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
        {isLoading && <p>Press the button below to see cute cats!</p>}
        {hasError && isLoading && (
          <img src={catUrl?.url} alt="" width="300px" />
        )}
        {!hasError && <p>Oh no! Something went wrong.</p>}
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
      setIsLoading(true);
    } catch (error) {
      setHasError(true);
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
