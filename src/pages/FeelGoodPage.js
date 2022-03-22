import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import pinkArrow from '../Images/arrow_pink.svg';
import { PinkButton } from '../components/Button';

export default function FeelGoodPage() {
  const navigate = useNavigate();
  const [catResponse, setCatResponse] = useState(null);
  const [hasError, setHasError] = useState(true);

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
        <p>Click the button to see cute cats!</p>
        {hasError && <img src={catResponse?.url} alt="" width="300px" />}
        {!hasError && <p>Oh no! Something went wrong.</p>}
        <PinkButton onClick={fetchCatImages}>Click me!</PinkButton>
      </CatContainer>
    </Flex>
  );

  async function fetchCatImages() {
    try {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search'
      );
      const data = await response.json();
      setCatResponse(data[0]);
    } catch (error) {
      setHasError(true);
    }
  }
}

const Flex = styled.section`
  display: flex;
  padding: 20px;
  flex-direction: column;
  background-color: var(--bg-secondary);
  font-size: 22px;
  color: var(--text-secondary);
  font-family: 'Indie Flower';
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
  color: var(--text-secondary);
  font-family: 'Indie Flower';
`;

const CatContainer = styled.div`
  display: grid;
  justify-items: center;
  padding-bottom: 165px;
`;
