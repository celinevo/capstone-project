import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PageSwitchAnimation from '../components/PageSwitchAnimation.js';
import lilacArrow from '../Images/arrow_lilac.svg';
import { SecondaryButton } from '../components/Button';

export default function FeelGoodPage() {
  const navigate = useNavigate();
  const [catResponse, setCatResponse] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Flex>
      <PageSwitchAnimation>
        <GoBackButton onClick={() => navigate(-1)}>
          <motion.img
            alt="Lilac Arrow, if clicked leads back to main page"
            src={lilacArrow}
            width="60px"
            height="60px"
            whileTap={{ scale: 1.2 }}
          />
        </GoBackButton>
        <Header>Scared? Not anymore!</Header>
        <CatContainer>
          <p>Click the button to see cute cats!</p>
          {isLoading && <p>Loading...</p>}
          {catResponse && !hasError && !isLoading && (
            <img src={catResponse?.url} alt="" width="300px" />
          )}
          {hasError && (
            <p>
              Oh no! Something went wrong. <br />
              You should try again!
            </p>
          )}
          <SecondaryButton onClick={fetchCatImages}>Click me!</SecondaryButton>
        </CatContainer>
      </PageSwitchAnimation>
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
      console.error(error);
      setHasError(true);
      setIsLoading(false);
    }
  }
}

const Flex = styled.section`
  display: flex;
  height: 100%;
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
  padding: 20px;
  z-index: 2;
  cursor: pointer;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 35px;
  margin: -45px 5px 0px 5px;
  padding: 0px 20px 0px 20px;
  color: var(--text-secondary);
  font-family: 'Indie Flower';
`;

const CatContainer = styled.div`
  display: grid;
  justify-items: center;
  padding: 0px;
  margin: 0px;
  background-color: var(--bg-secondary);
`;
